"use client";

import "./globals.css";

import ThemeRegistry from "@/theme/theme-registery";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ background: "#2a2a2b", color: "#fff" }}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
