import React from "react";
import styles from "src/styles/Home.module.css";
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import { useDisclosure } from "@mantine/hooks";
import { client } from "src/lib/miscrocms/client";
import { Layout } from "src/components/Layout";
import type { Article } from "src/components/types/article";
import Image from "next/image";
import { Props } from "src/pages";

// 単数のブログデータを引っ張ってくる
export type PropsDetail = {
  blog: Article;
};

export default function BlogId({ blog }: PropsDetail) {
  console.log(blog);
  const becu:string|undefined = blog.eye_catch.url?blog.eye_catch.url:"";
  const EyeCatch = (): JSX.Element | null => {
    if (becu) {
      return (
        <div className="mb-5">
          <Image
            className="aspect-auto"
            src={becu}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      );
    }
    return null;
  };
  console.log(blog.publishedAt);
  const [opened, handlers] = useDisclosure(false);

  return (
    <div className={styles.container}>
      <Layout>
        <h1 className="mb-6 mx-auto">{blog.title}</h1>
        <div className="flex mb-4 mt-4">
          <p className="">公開日:</p>
          <p> {blog.publishedAt} </p>
          <p className="ml-3">更新日:</p>
          <p> {blog.revisedAt}</p>
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
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "mainblog" });
  console.log(data.contents);
  const paths = data.contents.map(
    (content: { id: string }) => `/mainblog/${content.id}`
  );
  return { paths, fallback: false };
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
