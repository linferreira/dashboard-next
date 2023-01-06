import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyles";
import { Global, ThemeProvider } from "@emotion/react";
import { dark } from "@/styles/themes";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <main className={roboto.className}>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
