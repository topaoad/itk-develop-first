import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: "top-blog",
  apiKey: process.env.NEXT_PUBLIC_API_KEY 
});