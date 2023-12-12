// Important for useMutation: We bring in gql from the @apollo/client library to allow us to parse mutations (and queries) as template literals
import { gql } from "@apollo/client";

// Important for useMutation: Each mutation we'd like to be able to perform gets exported out of our mutations.js utility
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            name
            email
        }
      }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String! $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
        token
        user {
            _id
            name
            email  
          }
      }
  }
`;
