import { gql } from "@apollo/client";
import React from "react";

import { client } from "../../client";

const getRandomJoke = gql`
  query GetRandomJoke($limit: Int!) {
    all(limit: $limit)
  }
`;

export default function ProvidesApolloQuery({ jokes }) {
  return (
    <main>
      <h1>Jokes!</h1>
      <ul>
        {jokes.map((joke) => (
          <li key={joke}>{joke}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps({ query }) {
  const { limit = 2 } = query;
  const data = await client.query({
    query: getRandomJoke,
    variables: { limit: +limit },
  });

  return {
    props: {
      jokes: data.error ? ["failed..."] : data.data.all,
    },
  };
}
