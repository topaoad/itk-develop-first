import { ApolloClient, InMemoryCache } from "@apollo/client";

// apollpclientのインスタンス化
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://flyby-gateway.herokuapp.com/",
  // uri: "http://localhost:3000/api/githubgraphql",
});

// gtihubgrapqlのエンドポイントに対してApolloClientのインスタンスを作成する
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  headers: { authorization: `Bearer ${process.env.GH_TOKEN}` },
  uri: "https://api.github.com/graphql",
});
