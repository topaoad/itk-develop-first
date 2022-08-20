import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FormList } from "../components/PageContainer/FormList";
import { Layout } from "src/components/Layout";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <FormList />
      </Layout>
    </div>
  );
};

export default Contact;
