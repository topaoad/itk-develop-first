import { createClient } from "microcms-js-sdk";

export const client = createClient({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  serviceDomain: "top-blog",
});
