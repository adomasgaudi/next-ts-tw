import "../share/infra/styles/Global.css";
import "tailwindcss/base.css";
import { useOutline } from "../share/utils/tools/useOutline";

declare module "react" {
  interface Attributes {
    css?: any;
  }
}

function MyApp({ Component, pageProps }) {
  useOutline();
  return <Component {...pageProps} />;
}

export default MyApp;
