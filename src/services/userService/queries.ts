import { gql } from "@apollo/client";

export const GET_USER_Details = gql`
  query getUserDetails($id: uuid) {
    users(where: { id: { _eq: $id } }) {
      id
      email
      image
      is_admin
      name
      created_at
      products {
        description
        id
        image
        price
        title
        category {
          name
        }
      }
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      email
      image
      is_admin
      name
      created_at
    }
  }
`;
