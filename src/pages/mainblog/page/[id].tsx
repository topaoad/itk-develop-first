import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { client } from "src/lib/miscrocms/client";
import styles from "src/styles/Home.module.css";
import type { Article } from "src/types/article";
dayjs.extend(utc);
dayjs.extend(timezone);
import { BlogArchive } from "src/components/PageContainer/BlogArchive";
import { Pagination } from "src/components/Pagenation";

// 単数のブログデータを引っ張ってくる
type PropsDetail = {
  blog: Article;
  totalCount: number;
};

export type BlogPaginationProps = {
  blog: Array<Article>;
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

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const range = (start: number, end: number) =>
    // eslint-disable-next-line @typescript-eslint/naming-convention
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
    (repo) => `/mainblog/page/${repo}`
  );

  return { fallback: false, paths };
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
    castId = Number(id);
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
