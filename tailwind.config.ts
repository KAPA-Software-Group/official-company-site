import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        deep: "rgb(var(--deep) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 44px rgb(var(--primary) / 0.18)",
        "glow-strong": "0 0 70px rgb(var(--accent) / 0.22)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(var(--border) / 0.55) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--border) / 0.55) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "slow-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "slow-spin": "slow-spin 22s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
