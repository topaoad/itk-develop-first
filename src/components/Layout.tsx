import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FormList } from "./PageContainer/FormList";
import type { FC, ReactNode} from "react";

type Props = {
  children: ReactNode
}


export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
