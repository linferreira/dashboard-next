import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyles";
import { Global, ThemeProvider } from "@emotion/react";
import { dark } from "@/styles/themes";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={dark}>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
