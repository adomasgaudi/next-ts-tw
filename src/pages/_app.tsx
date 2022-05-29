// import "../app/infra/styles/Global.css";
import "../share/infra/styles/Global.css";
import "tailwindcss/base.css";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { useOutline } from "../share/utils/tools/useOutline";
import { GlobalStyles, themeFn } from "../share/infra/styles/Themeconfig";

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
