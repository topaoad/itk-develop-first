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
  title: string;
  body: string;
  createdAt: string;
  day: string;
  eye_catch: {
    height: number;
    url: string;
    width: number;
  };
  publishedAt: string;
  revisedAt: string;
  sub: string;
  tag: string;
  updatedAt: string;
};
export type PortfolioArticle = {
  id: string;
  title: string;
  contents: string;
  createdAt: string;
  duration: string;
  eyecatch: {
    height: number;
    url: string;
    width: number;
  };
  programingword: string;
  publishedAt: string;
  revisedAt: string;
  tag: string;
  updatedAt: string;
  url: string;
};

export type BlogPortfolioProps = {
  blog: Array<Article>;
  portfolio: Array<PortfolioArticle>;
  totalCount: number;
};
