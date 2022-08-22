import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MainView } from "../components/PageContainer/MainView";
import { BlogArchive } from "../components/PageContainer/BlogArchive";
import { PortFolio } from "../components/PageContainer/PortFolio";
import { GitHub } from "../components/PageContainer/GitHub";
import { Twitter } from "../components/PageContainer/Twitter";
import { Layout } from "src/components/Layout";
import { client } from "src/lib/miscrocms/client";

const Home: NextPage = ({ blog }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <MainView />
        <BlogArchive blog={blog} />
        <PortFolio />
        <div className="grid grid-cols-1  md:grid-cols-2  md:gap-x-20 ">
          <GitHub />
          <Twitter />
        </div>
        
      </Layout>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "mainblog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
