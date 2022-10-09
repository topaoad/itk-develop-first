import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/mainview.scss";
import "../styles/github.scss";
import "../styles/pagination.scss";

import { ApolloProvider } from "@apollo/client";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { apolloClient } from "src/lib/apollo/apolloClient";
import { SWRConfig } from "swr";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const swrData = await res.json();
    return swrData;
  };

  return (
    <>
      <SWRConfig
        value={{
          // refreshInterval: 100000,
          fetcher: fetcher,
        }}
      >
        {" "}
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
              theme={{ colorScheme, components: {}, fontFamily: "Avenir Next" }}
              withGlobalStyles
              withNormalizeCSS
            >
              <Component {...pageProps} />
            </MantineProvider>
          </ColorSchemeProvider>
        </ApolloProvider>
      </SWRConfig>
    </>
  );
}
