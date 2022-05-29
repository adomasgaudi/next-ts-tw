import "../app/styles/Global.css";
import "../app/styles/GlobalTW.css";
import "tailwindcss/base.css";
// import {} from "styled-components/cssprop";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../app/styles/Themeconfig";
// import { GlobalStyles } from "twin.macro";

declare module "react" {
  interface Attributes {
    css?: any;
  }
}

const theme: any = {
  darkTheme: {
    body: "#30ff40",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    background: "#999",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
