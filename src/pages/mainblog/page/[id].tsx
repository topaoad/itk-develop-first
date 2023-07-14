import React, { useCallback } from "react";
import styles from "src/styles/Home.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useDisclosure } from "@mantine/hooks";
import { client } from "src/lib/miscrocms/client";
import { Layout } from "src/components/Layout";
import type { Article } from "src/types/article";
import Image from "next/image";
import { Props } from "src/pages";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import type {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
  GetStaticPaths,
} from "next";
dayjs.extend(utc);
dayjs.extend(timezone);
import { Pagination } from "src/components/Pagenation";
import Link from "next/link";
import { BlogPaginationProps } from "src/pages/blog";
import { BlogArchive } from "src/components/PageContainer/BlogArchive";

// 単数のブログデータを引っ張ってくる
type PropsDetail = {
  blog: Article;
  totalCount: number;
};

const PER_PAGE = 5;

// export default function BlogId({ blog }: PropsDetail) {
const BlogPageId: NextPage<BlogPaginationProps> = ({ blog, totalCount }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <BlogArchive blog={blog} />
        <Pagination totalCount={totalCount} />
      </Layout>
    </div>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({
    endpoint: "mainblog",
    queries: { limit: 20, offset: 0 },
  });

  const pageNumbers = [];

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
    (repo) => `/mainblog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context) => {
  // context.params?.idは、ブラケットの値[id]を取得することができる。
  // ここでは、id=repo=数値がはいる。
  const id = context.params?.id;
  let castId = 0;
  // idをstringからnumberに変換するための式。undefined対策こみ。
  // offsetの開始位置設定用
  if (id) {
    castId = +id;
  }
  const data = await client.get({
    endpoint: "mainblog",
    queries: { limit: 5, offset: (castId - 1) * 5 },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default BlogPageId;
