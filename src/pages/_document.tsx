import { createGetInitialProps } from "@mantine/next";
import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";

class MyDocument extends Document {
  render() {
  
    return (
      <Html>
        <Head>
  
         
        </Head>

            <body className="">
            {/* <body> */}
              <Main />
              <NextScript />
            </body>
    
      </Html>
    );
  }
}

export default MyDocument;
