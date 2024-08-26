import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $name: String
    $is_admin: Boolean
    $image: String
    $email: String
    $password: String
  ) {
    insert_users(
      objects: {
        name: $name
        is_admin: $is_admin
        image: $image
        password: $password
        email: $email
      }
    ) {
      returning {
        id
        email
        image
        is_admin
        name
        created_at
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;
