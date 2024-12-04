"use client";
// import type { Metadata } from "next";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { cacheRtl, theme } from "@/theme/theme";
import "./globals.css";
import { CacheProvider } from "@emotion/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ background: "#2a2a2b", color: "#fff" }}>
        <ThemeProvider theme={theme}>
          <CacheProvider value={cacheRtl}>
            <CssBaseline />
            {children}
          </CacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
