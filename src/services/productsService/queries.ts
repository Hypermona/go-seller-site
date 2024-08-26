import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      category {
        name
        id
      }
      description
      id
      image
      price
      title
      user {
        email
        id
        image
        name
        is_admin
      }
    }
  }
`;
