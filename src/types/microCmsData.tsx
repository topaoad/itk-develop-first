import { MicroCMSListResponse } from "microcms-js-sdk";

// export type Blog = {
//   title?: string;
//   lead?: string;
//   content?: string;
//   contents: string;
//   duration: string;
//   programingword: string;
//   createdAt?: string;
//   body: string;
//   sub: string;
//   eye_catch: {
//     url: string;
//     height: number;
//     width: number;
//   };
//   eyecatch?: {
//     url?: string;
//     height?: number;
//     width?: number;
//   };
//   tag: string;
//   url:string;
//   id?: string;
//   publishedAt?: Date;
//   limit?: number;
//   offset?: number;
//   totalCount?: number;
// };

export type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  day: string;
  body: string;
  sub: string;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  tag: string;
};
export type PortfolioArticle = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  contents: string;
  duration: string;
  programingword: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  tag: string;
  url:string;
  
};



export type BlogPortfolioProps = {
  blog: Array<Article>;
  portfolio: Array<PortfolioArticle>;
};