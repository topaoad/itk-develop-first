import { ApolloClient, InMemoryCache } from "@apollo/client";

// apollpclientのインスタンス化
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://flyby-gateway.herokuapp.com/",
  // uri: "http://localhost:3000/api/githubgraphql",
});



// apollpclientのインスタンス化gtihubgrapqlのエンドポイントバージョン
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  headers: { authorization: `Bearer ${process.env.GH_TOKEN}` },
  uri: "https://api.github.com/graphql",
});

// たぶんここで書く必要はない
// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
