import createCache from "@emotion/cache";
import { createTheme } from "@mui/material";

import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: '"dana",  "sans-serif"',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'dana';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src:  url(/fonts/danaRegular.woff) format('woff');
        }

        @font-face {
          font-family: 'dana';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: url(/fonts/danaMedium.woff) format('woff');
          }

          @font-face {
            font-family: 'dana';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src:  url(/fonts/danaBold.woff) format('woff');
          }
          @font-face {
            font-family: 'dana';
            font-style: normal;
            font-display: swap;
            font-weight: 900;
            src:  url(./fonts/danaExtrabold.woff) format('woff');
          }
          @font-face {
            font-family: 'dana-fa';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src:  url(/fonts/DanaFaNum-Regular.woff) format('woff');
          }
          @font-face {
            font-family: 'dana-fa';
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src:  url(/fonts/DanaFaNum-Medium.woff) format('woff');
          }
          @font-face {
            font-family: 'dana-fa';
            font-style: normal;
            font-display: swap;
            font-weight: 800;
            src:  url(/fonts/DanaFaNum-Bold.woff) format('woff');
          }
          @font-face {
            font-family: 'dana-fa';
            font-style: normal;
            font-display: swap;
            font-weight: 900;
            src:  url(/fonts/DanaFaNum-ExtraBold.woff) format('woff');
          }

         
          
      `,
    },
  },
});

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
