import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PortFolio } from "../components/PageContainer/PortFolio";
import { Layout } from "src/components/Layout";

const Portfolio: NextPage = () => {
  return (
    <div className={styles.container}>
     <Head>
      <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <PortFolio />
      </Layout>
    </div>
  );
};

export default Portfolio;
