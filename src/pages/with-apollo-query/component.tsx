import { ApolloProvider } from "@apollo/client";
import React from "react";

import { client } from "../../client";
import { useRandomQuery } from "../../generated";

function UsesApolloQuery() {
  const { loading, error, data } = useRandomQuery();

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error.toString()}</h1>;

  return <h1>{data.random}!</h1>;
}

export default function ProvidesApolloQuery() {
  return (
    <ApolloProvider client={client}>
      <main>
        <UsesApolloQuery />
      </main>
    </ApolloProvider>
  );
}
