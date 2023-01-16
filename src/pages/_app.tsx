import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/mainview.scss";
import "../styles/github.scss";
import "../styles/pagination.scss";

import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { createContext } from "react";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { apolloClient } from "src/lib/apollo/apolloClient";
import { store } from "src/state/todosReduxindex-tk";
import { SWRConfig } from "swr";

// useContextVer
export const ThemeContext = createContext<"light" | "dark">("light");
export const LangContext = createContext<"japanese" | "english">("japanese");

export default function App(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const swrData = await res.json();
    return swrData;
  };
  // Contextは重ねることが可能。なお、同じものを重ねた場合は近い方が優先される。
  return (
    <>
      <ChakraProvider>
        <RecoilRoot>
          <Provider store={store}>
            <ThemeContext.Provider value="dark">
              <LangContext.Provider value="english">
                <SWRConfig
                  value={{
                    // refreshInterval: 100000,
                    fetcher: fetcher,
                  }}
                >
                  <SessionProvider session={session}>
                    <ApolloProvider client={apolloClient}>
                      <Head>
                        <title>しまぶーポートフォリオサイト</title>
                        <meta
                          name="viewport"
                          content="minimum-scale=1, initial-scale=1, width=device-width"
                        />
                        <link rel="icon" href="/favicon.ico" />
                      </Head>

                      <ColorSchemeProvider
                        colorScheme={colorScheme}
                        toggleColorScheme={toggleColorScheme}
                      >
                        <MantineProvider
                          theme={{
                            colorScheme,
                            components: {},
                            fontFamily: "Avenir Next",
                          }}
                          withGlobalStyles
                          withNormalizeCSS
                        >
                          <Component {...pageProps} />
                        </MantineProvider>
                      </ColorSchemeProvider>
                    </ApolloProvider>
                  </SessionProvider>
                </SWRConfig>
              </LangContext.Provider>
            </ThemeContext.Provider>
          </Provider>
        </RecoilRoot>
      </ChakraProvider>
    </>
  );
}
