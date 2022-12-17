import { Button } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Layout } from "src/components/Layout";
import { client } from "src/lib/miscrocms/client";
import type { Article, PortfolioArticle } from "src/types/article";
import { BlogPortfolioProps } from "src/types/microCmsData";

import { BlogArchive } from "../components/PageContainer/BlogArchive";
import { GitHub } from "../components/PageContainer/GitHub";
import { MainView } from "../components/PageContainer/MainView";
import { PortFolio } from "../components/PageContainer/PortFolio";
import { Twitter } from "../components/PageContainer/Twitter";
import styles from "../styles/Home.module.css";

export type Props = {
  blog: Array<Article>;
};
export type SubProps = {
  portfolio: Array<PortfolioArticle>;
};

// const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blog }) => {
const Home: NextPage<BlogPortfolioProps> = ({
  blog,
  portfolio,
  totalCount,
}) => {
  const { data: session } = useSession();
  // sessionの中身
  console.log(session);
  // if文ではなく三項演算子のほうがよいかも。
  if (session) {
    return (
      <div className={styles.container}>
        <Head>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <Layout>
          <button onClick={() => signOut()}>Sign out</button>
          <MainView />
          <BlogArchive blog={blog} />
          <div className="mt-6 ">
            <Link href="/mainblog/page" passHref>
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
  }
  return (
    <div className={styles.container}>
      ログイン前だよ
      <button onClick={() => signIn()}>Sign in</button>
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
      totalCount: data.totalCount,
    },
  };
};
