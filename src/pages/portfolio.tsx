import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainView } from "../components/PageContainer/MainView";
import { BlogArchive } from "../components/PageContainer/BlogArchive";
import { PortFolio } from "../components/PageContainer/PortFolio";
import { GitHub } from "../components/PageContainer/GitHub";
import { Twitter } from "../components/PageContainer/Twitter";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <PortFolio />
      </main>
      <Footer />
    </div>
  );
};

export default Home;