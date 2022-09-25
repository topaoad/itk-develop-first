import { createServer } from "@graphql-yoga/node";
import { Octokit } from "@octokit/core";
import type { NextApiRequest, NextApiResponse } from "next";

const resolvers = {
  Query: {
    async repositories() {
      const query = `
        {
          viewer {
            name
            repositories(last: 5) {
              nodes {
                name
                description
              }
            }
          }
        }
      `;
      const octokit = new Octokit({
        auth: process.env.GH_TOKEN,
      });
      const repository = await octokit.graphql(query);

      if (!repository) {
        return;
      }
      console.log(repository);
      return { repository };
    },
  },
};

const typeDefs = /* GraphQL */ `
  type Query {
    repositories: [Repository!]!
  }
  type Repository {
    name: String
    description: String
  }
`;

const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  endpoint: "/api/githubgraphqlsv",
  graphiql: false, // uncomment to disable GraphiQL
  schema: {
    resolvers,
    typeDefs,
  },
});

export default server;
