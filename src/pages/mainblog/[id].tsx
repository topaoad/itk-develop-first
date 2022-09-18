import React, { useCallback } from "react";
import styles from "src/styles/Home.module.css";
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
import type { GetStaticProps, InferGetStaticPropsType, NextPage,GetStaticPaths  } from "next";
dayjs.extend(utc);
dayjs.extend(timezone);

// 単数のブログデータを引っ張ってくる
export type PropsDetail = {
  blog: Article;
};

// export default function BlogId({ blog }: PropsDetail) {
 const BlogId:NextPage<PropsDetail> = ( {blog}:PropsDetail) => {
  console.log(blog);
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
  console.log(blog.publishedAt);
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
  return { paths, fallback:  'blocking' };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = await client.get({
    endpoint: "mainblog",
    contentId: id as string,
  });

  return {
    props: {
      blog: data,
    },
   
  };
};

export default BlogId;
