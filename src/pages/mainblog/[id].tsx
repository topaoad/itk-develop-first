import { useDisclosure } from "@mantine/hooks";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React, { useCallback } from "react";
import { Layout } from "src/components/Layout";
import { client } from "src/lib/miscrocms/client";
import styles from "src/styles/Home.module.css";
import type { Article } from "src/types/article";
dayjs.extend(utc);
dayjs.extend(timezone);

// 単数のブログデータを引っ張ってくる
export type PropsDetail = {
  blog: Article;
};

// export default function BlogId({ blog }: PropsDetail) {
const BlogId: NextPage<PropsDetail> = ({ blog }: PropsDetail) => {
  const EyeCatch = useCallback((): JSX.Element | null => {
    if (blog.eye_catch) {
      return (
        <div className="mb-5">
          <Image
            className="aspect-auto"
            src={blog.eye_catch.url}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      );
    }
    return null;
  }, []);

  const [opened, handlers] = useDisclosure(false);
  const formatPublishedAt = dayjs
    .utc(blog.publishedAt)
    .tz("Asia/Tokyo")
    .format("YYYY.MM.DD");
  const formatRevisedAt = dayjs
    .utc(blog.revisedAt)
    .tz("Asia/Tokyo")
    .format("YYYY.MM.DD");

  return (
    <div className={styles.container}>
      <Layout>
        <h1 className="mb-6 mx-auto">{blog.title}</h1>
        <div className="flex mb-4 mt-4">
          <p className="">公開日:</p>
          <p> {formatPublishedAt} </p>
          <p className="ml-3">更新日:</p>
          <p> {formatRevisedAt}</p>
        </div>
        <EyeCatch />

        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
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

  const paths = data.contents.map(
    (content: { id: string }) => `/mainblog/${content.id}`
  );
  return { fallback: "blocking", paths };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = await client.get({
    contentId: id as string,
    endpoint: "mainblog",
  });

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId;
