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