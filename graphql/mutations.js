/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJoke = /* GraphQL */ `
  mutation CreateJoke(
    $input: CreateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    createJoke(input: $input, condition: $condition) {
      id
      question
      answer
      funny
      createdAt
      updatedAt
    }
  }
`;
export const updateJoke = /* GraphQL */ `
  mutation UpdateJoke(
    $input: UpdateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    updateJoke(input: $input, condition: $condition) {
      id
      question
      answer
      funny
      createdAt
      updatedAt
    }
  }
`;
export const deleteJoke = /* GraphQL */ `
  mutation DeleteJoke(
    $input: DeleteJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    deleteJoke(input: $input, condition: $condition) {
      id
      question
      answer
      funny
      createdAt
      updatedAt
    }
  }
`;
