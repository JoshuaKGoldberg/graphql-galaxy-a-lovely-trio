import fetch from "cross-fetch";
import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // (because we're running this in standalone Node.js without a global fetch)
  link: new HttpLink({ uri: "http://localhost:4000/graphql", fetch }),
  uri: "http://localhost:4000",
});

const result = await client.query({
  query: gql`
    {
      all(limit: 3)
    }
  `,
});

console.log(result);
