import { gql } from "@apollo/client";

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String) {
    insert_categories_one(object: { name: $name }) {
      id
      name
    }
  }
`;
