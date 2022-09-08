import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/mainview.scss";
import "../styles/github.scss";
import "../styles/pagination.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { useTwitterUser } from "src/hooks/useTwitterUser";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const  twitterProps  = useTwitterUser();
  console.log(twitterProps);

  return (
    <>
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
          <Component {...pageProps}  />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
