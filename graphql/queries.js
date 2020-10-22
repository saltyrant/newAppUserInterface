/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJoke = /* GraphQL */ `
  query GetJoke($id: ID!) {
    getJoke(id: $id) {
      id
      question
      answer
      funny
      createdAt
      updatedAt
    }
  }
`;
export const listJokes = /* GraphQL */ `
  query ListJokes(
    $filter: ModelJokeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJokes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        answer
        funny
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const jokeByFunny = /* GraphQL */ `
  query JokeByFunny(
    $funny: String
    $sortDirection: ModelSortDirection
    $filter: ModelJokeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jokeByFunny(
      funny: $funny
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        question
        answer
        funny
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
