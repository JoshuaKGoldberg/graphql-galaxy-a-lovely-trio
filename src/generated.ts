// These were manually copied from a-lovely-graphql-server
// In theory you'd want a local repo or packages or some such.

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  add: Scalars["Int"];
};

export type MutationAddArgs = {
  joke: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  all: Array<Scalars["String"]>;
  random: Scalars["String"];
};

export type QueryAllArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

export type GetAllQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllQuery = { __typename?: "Query"; all: Array<string> };

export type RandomQueryVariables = Exact<{ [key: string]: never }>;

export type RandomQuery = { __typename?: "Query"; random: string };

export const GetAllDocument = gql`
  query GetAll {
    all
  }
`;

/**
 * __useGetAllQuery__
 *
 * To run a query within a React component, call `useGetAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllQuery, GetAllQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllQuery, GetAllQueryVariables>(
    GetAllDocument,
    options
  );
}
export function useGetAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllQuery, GetAllQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllQuery, GetAllQueryVariables>(
    GetAllDocument,
    options
  );
}
export type GetAllQueryHookResult = ReturnType<typeof useGetAllQuery>;
export type GetAllLazyQueryHookResult = ReturnType<typeof useGetAllLazyQuery>;
export type GetAllQueryResult = Apollo.QueryResult<
  GetAllQuery,
  GetAllQueryVariables
>;
export const RandomDocument = gql`
  query Random {
    random
  }
`;

/**
 * __useRandomQuery__
 *
 * To run a query within a React component, call `useRandomQuery` and pass it any options that fit your needs.
 * When your component renders, `useRandomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRandomQuery({
 *   variables: {
 *   },
 * });
 */
export function useRandomQuery(
  baseOptions?: Apollo.QueryHookOptions<RandomQuery, RandomQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RandomQuery, RandomQueryVariables>(
    RandomDocument,
    options
  );
}
export function useRandomLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RandomQuery, RandomQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RandomQuery, RandomQueryVariables>(
    RandomDocument,
    options
  );
}
export type RandomQueryHookResult = ReturnType<typeof useRandomQuery>;
export type RandomLazyQueryHookResult = ReturnType<typeof useRandomLazyQuery>;
export type RandomQueryResult = Apollo.QueryResult<
  RandomQuery,
  RandomQueryVariables
>;
