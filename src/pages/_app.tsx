import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/mainview.scss";
import "../styles/github.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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
          theme={{ colorScheme,
            components: {
           
            },
            fontFamily: "Avenir Next",
          }}
          
          withGlobalStyles
          withNormalizeCSS
          
        >

          <Component {...pageProps} />

        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
