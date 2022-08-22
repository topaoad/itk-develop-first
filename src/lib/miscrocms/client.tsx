import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: "top-blog",
  apiKey: process.env.API_KEY as string
});