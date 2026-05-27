import type { Metadata, Viewport } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { WebsiteIntro } from "@/components/layout/website-intro";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kapa Software | Modern Websites & Software Systems",
    template: "%s | Kapa Software",
  },
  description: siteConfig.description,
  icons: {
    icon: "/brand/kapa-icon.png",
    apple: "/brand/kapa-apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const themeScript = `
  (() => {
    const stored = localStorage.getItem("${siteConfig.themeStorageKey}");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = stored || (prefersLight ? "light" : "dark");
    document.documentElement.classList.toggle("dark", theme === "dark");
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <WebsiteIntro />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
