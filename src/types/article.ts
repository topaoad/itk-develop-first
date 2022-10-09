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
