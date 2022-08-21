// const { createClient } = require("microcms-js-sdk"); // CommonJS
import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "itkingdomarchivetest", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  // apiKey: process.env.API_KEY,
  apiKey: process.env.API_KEY,
});
