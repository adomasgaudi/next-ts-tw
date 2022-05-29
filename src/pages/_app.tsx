import "../app/styles/Global.css";
import "../app/styles/GlobalTW.css";
import "tailwindcss/base.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, themeFn } from "../app/styles/Themeconfig";

declare module "react" {
  interface Attributes {
    css?: any;
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themeFn(1, 1)}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
