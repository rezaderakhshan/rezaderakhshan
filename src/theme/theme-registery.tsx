// app/ThemeRegistry.tsx
"use client";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { theme } from "./theme";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline } from "@mui/material";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const options = { key: "mui", stylisPlugins: [prefixer, rtlPlugin] };
  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <AppRouterCacheProvider>
      <CacheProvider value={cache}>
        <CssBaseline />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </AppRouterCacheProvider>
  );
}

// app/layout.js
// export default function RootLayout(props) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeRegistry options={{ key: "mui" }}>{props.children}</ThemeRegistry>
//       </body>
//     </html>
//   );
// }
