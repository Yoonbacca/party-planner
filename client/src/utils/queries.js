import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
    _id
    username
    email
    parties {
      _id
    }
    friends {
      _id
    }
  }
}`;