import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { BlogArchive } from "../components/PageContainer/BlogArchive";
import { Layout } from "src/components/Layout";
const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <BlogArchive />
      </Layout>
    </div>
  );
};

export default Blog;
