"use client";

import { useEffect, useRef } from "react";
import type * as ThreeTypes from "three";

type SceneRefs = {
  camera: ThreeTypes.Camera;
  scene: ThreeTypes.Scene;
  renderer: ThreeTypes.WebGLRenderer;
  uniforms: {
    time: { value: number };
    resolution: { value: ThreeTypes.Vector2 };
  };
  animationId: number;
};

type ShaderAnimationProps = {
  className?: string;
  disabled?: boolean;
};

export function ShaderAnimation({ className, disabled = false }: ShaderAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneRefs | null>(null);

  useEffect(() => {
    if (!containerRef.current || disabled) return;

    const container = containerRef.current;
    let disposed = false;
    let cleanupScene: (() => void) | undefined;

    void import("three").then((THREE) => {
      if (disposed || !containerRef.current) return;

      const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `;

      const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }

        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `;

      const camera = new THREE.Camera();
      camera.position.z = 1;

      const scene = new THREE.Scene();
      const geometry = new THREE.PlaneGeometry(2, 2);

      const uniforms = {
        time: { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const resize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        uniforms.resolution.value.x = renderer.domElement.width;
        uniforms.resolution.value.y = renderer.domElement.height;
      };

      resize();
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      let isVisible = true;
      let isDocumentVisible = document.visibilityState === "visible";
      let animationId = 0;

      function stop() {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = 0;
        }
      }

      function start() {
        if (!animationId && isVisible && isDocumentVisible) {
          animationId = requestAnimationFrame(animate);
        }
      }

      function animate() {
        animationId = 0;
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
        start();
      }

      const intersectionObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          start();
        } else {
          stop();
        }
      });
      intersectionObserver.observe(container);

      const handleVisibilityChange = () => {
        isDocumentVisible = document.visibilityState === "visible";
        if (isDocumentVisible) {
          start();
        } else {
          stop();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      sceneRef.current = {
        camera,
        scene,
        renderer,
        uniforms,
        animationId,
      };

      start();

      cleanupScene = () => {
        stop();
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        document.removeEventListener("visibilitychange", handleVisibilityChange);

        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }

        renderer.dispose();
        geometry.dispose();
        material.dispose();
        sceneRef.current = null;
      };
    });

    return () => {
      disposed = true;
      cleanupScene?.();
    };
  }, [disabled]);

  return (
    <div
      ref={containerRef}
      className={className ?? "h-screen w-full"}
      style={{
        background: "#000",
        overflow: "hidden",
      }}
    />
  );
}
