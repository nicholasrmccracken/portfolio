import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicholas McCracken — Software Engineer",
  description:
    "Software engineer and M.S. Computer Science Engineering student building intelligent systems, data infrastructure, and useful products.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#090a0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
