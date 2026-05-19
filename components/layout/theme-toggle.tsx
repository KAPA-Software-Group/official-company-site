"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem(siteConfig.themeStorageKey, next);
  };

  return (
    <Button
      aria-label="Toggle color mode"
      className="border bg-surface/70 text-foreground hover:bg-primary/10"
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
    </Button>
  );
}
