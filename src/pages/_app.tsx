import "../app/infra/styles/Global.css";
import "tailwindcss/base.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, themeFn } from "../app/infra/styles/Themeconfig";
import { useEffect } from "react";
import { useOutline } from "../app/utils/tools/useOutline";

declare module "react" {
  interface Attributes {
    css?: any;
  }
}

function MyApp({ Component, pageProps }) {
  useOutline();

  return (
    <ThemeProvider theme={themeFn(1, 1)}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
