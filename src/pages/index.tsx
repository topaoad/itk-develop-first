import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MainView } from "../components/PageContainer/MainView";
import { BlogArchive } from "../components/PageContainer/BlogArchive";
import { PortFolio } from "../components/PageContainer/PortFolio";
import { GitHub } from "../components/PageContainer/GitHub";
import { Twitter } from "../components/PageContainer/Twitter";
import { Layout } from "src/components/Layout";
import { client } from "src/lib/miscrocms/client";
import type { Article, PortfolioArticle } from "src/types/article";
import { BlogPortfolioProps } from "src/types/microCmsData";
import Link from "next/link";
import { Button } from "@mantine/core";

export type Props = {
  blog: Array<Article>;
};
export type SubProps = {
  portfolio: Array<PortfolioArticle>;
};

// const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blog }) => {
const Home: NextPage<BlogPortfolioProps> = ({ blog, portfolio }) => {
  //引数をpropsで受け取った場合は、下記分散代入をかませる。
  // const { blog, portfolio } = props;

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <MainView />
        <BlogArchive blog={blog} />
        <div className="mt-6 ">
          <Link href="/blog" passHref>
            <Button className="font-semibold button-style">View All</Button>
          </Link>
        </div>

        <PortFolio portfolio={portfolio} />
        <div className="grid grid-cols-1  md:grid-cols-2  md:gap-x-20 ">
          <GitHub />
          <Twitter />
        </div>
      </Layout>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // const data = await client.get({ endpoint: "mainblog" });
  const data = await client.get({
    endpoint: "mainblog",
    queries: { limit: 5, offset: 0 },
  });
  const portfolioData = await client.get({
    endpoint: "portfolio",
    queries: { limit: 20, offset: 0 },
  });

  return {
    props: {
      blog: data.contents,
      portfolio: portfolioData.contents,
    },
  };
};
