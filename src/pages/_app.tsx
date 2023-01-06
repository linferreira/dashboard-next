import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyles";
import { Global, ThemeProvider } from "@emotion/react";
import { dark } from "@/styles/themes";
import { Roboto } from "@next/font/google";
import Head from 'next/head';
import { useTheme } from "@/hooks/useTheme";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
const teste = useTheme()

  return (
    <ThemeProvider theme={teste}>
      <Head>
        <title>Minha Carteira</title>
      </Head>
      <main className={roboto.className}>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
