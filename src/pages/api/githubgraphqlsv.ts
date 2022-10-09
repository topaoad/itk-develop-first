// パターン１　yoga
// import { createServer } from "@graphql-yoga/node";
// import { Octokit } from "@octokit/core";
// import type { NextApiRequest, NextApiResponse } from "next";

// const resolvers = {
//   Query: {
//     async repositories() {
//       const query = `
//         {
//           viewer {
//             name
//             repositories(last: 5) {
//               nodes {
//                 name
//                 description
//               }
//             }
//           }
//         }
//       `;
//       const octokit = new Octokit({
//         auth: process.env.GH_TOKEN,
//       });
//       const repository = await octokit.graphql(query);

//       if (!repository) {
//         return;
//       }

//       return { repository };
//     },
//   },
// };

// const typeDefs = /* GraphQL */ `
//   type Query {
//     repositories: [Repository!]!
//   }
//   type Repository {
//     name: String
//     description: String
//   }
// `;

// const server = createServer<{
//   req: NextApiRequest;
//   res: NextApiResponse;
// }>({
//   endpoint: "/api/githubgraphqlsv",
//   graphiql: false, // uncomment to disable GraphiQL
//   schema: {
//     resolvers,
//     typeDefs,
//   },
// });

// export default server;

// パターン２　apollo
import { ApolloServer, gql } from "apollo-server-micro";
import type { NextApiRequest, NextApiResponse } from "next";

// typeDefsはスキーマのこと
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// const typeDefs = require('./schema');

// resolversは実際のクエリーのこと
const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
};

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/githubgraphqlsv",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

// パターン３　その他
// import { NextApiRequest, NextApiResponse } from "next";
// import { ApolloServer } from "apollo-server-micro";
// import { readFileSync } from "fs";
// import { join } from "path";

// import { UseGitHubInfoQuery } from "src/types/githubGraphQL";

// const path = join(process.cwd(), "graphql", "schema.graphql");
// const typeDefs = readFileSync(path).toString("utf-8");
// import { gql, useQuery } from "@apollo/client";

// // スキーマと実際のデータ構造の紐付けを resolvers で行う
// const resolvers = {
// Query:{`
//   user(login: "topaoad") {
//     name
//     url
//     repositories(last: 5, orderBy: { field: UPDATED_AT, direction: ASC }) {
//       totalCount
//       nodes {
//         name
//         description
//         createdAt
//         updatedAt
//         url
//         forkCount
//         stargazerCount
//         languages(orderBy: { field: SIZE, direction: DESC }, last: 10) {
//           totalCount
//           totalSize
//           edges {
//             node {
//               id
//               name
//               color
//             }
//             size
//           }
//         }
//       }
//     }
//   }
// }
// `;

// };

// const apolloServer = new ApolloServer({ typeDefs, resolvers });

// const startServer = apolloServer.start();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await startServer;
//   await apolloServer.createHandler({
//     path: "/api/githubgraphqlsv",
//   })(req, res);
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// パターン５
// import { initializeApolloServer } from 'graphqlServer'
// import { NextApiRequest, NextApiResponse } from 'next'

// export const config = { api: { bodyParser: false } }

// const server = initializeApolloServer()
// const startServer = server.start()

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await startServer
//   await server.createHandler({
//     path: '/api/graphql',
//   })(req, res)
// }

// パターン６
// import { createServer } from "@graphql-yoga/node";
// import { gql, GraphQLClient } from "graphql-request";

// // GitHubからデータを取得

// const resolvers = {
//   Query: {
//     async repositories() {
//       const githubEndPoint = "https://api.github.com/graphql";

//       const query = gql`
//         {
//           user(login: "topaoad") {
//             pinnedItems(first: 5, types: REPOSITORY) {
//               nodes {
//                 ... on Repository {
//                   name
//                   description
//                   languages(
//                     first: 5
//                     orderBy: { field: SIZE, direction: DESC }
//                   ) {
//                     edges {
//                       node {
//                         color
//                         name
//                       }
//                       size
//                     }
//                     totalSize
//                   }
//                   forkCount
//                   stargazerCount
//                   url
//                   id
//                 }
//               }
//             }
//           }
//         }
//       `;

//       const graphQLClient = new GraphQLClient(githubEndPoint, {
//         headers: {
//           authorization: `Bearer ${process.env.GITHUB_BEARER_TOKEN}`,

//         },
//       });

//       const data = await graphQLClient.request(query);
//       const object = data.user.pinnedItems.nodes.map((node: any) => ({
//         id: node.id,
//         name: node.name,
//         description: node.description,
//         forkCount: node.forkCount,
//         languages: node.languages.edges.map((edge: any) => ({
//           name: edge.node.name,
//           color: edge.node.color,
//           percentage: Number(
//             (
//               (Number(edge.size) / Number(node.languages.totalSize)) *
//               100.0
//             ).toFixed(1)
//           ),
//         })),
//         stargazerCount: node.stargazerCount,
//         url: node.url,
//       }));

//       return object;
//     },
//   },
// };

// // APIとして値を返す

// const typeDefs = /* GraphQL */ `
//   type Query {
//     repositories: [Repository!]!
//   }
//   type Repository {
//     name: String!
//     description: String
//     languages: [Language!]!
//     forkCount: Int!
//     stargazerCount: Int!
//     url: String!
//     id: ID!
//   }
//   type Language {
//     color: String!
//     name: String!
//     percentage: Float!
//   }
// `;

// const server = createServer({
//   endpoint: "/api/githubgraphqlsv",
//   schema: {
//     resolvers,
//     typeDefs,
//   },
//   // graphiql: false // uncomment to disable GraphiQL
// });

// export default server;
