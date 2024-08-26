import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $image: String
    $description: String
    $category_id: uuid
    $price: String
    $seller_id: uuid
    $title: String
  ) {
    insert_products_one(
      object: {
        category_id: $category_id
        description: $description
        image: $image
        price: $price
        seller_id: $seller_id
        title: $title
      }
    ) {
      category {
        id
        name
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

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $title: String = ""
    $id: uuid = ""
    $price: String = ""
    $image: String = ""
    $description: String = ""
    $category_id: uuid = ""
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title
        price: $price
        image: $image
        description: $description
        category_id: $category_id
      }
    ) {
      category {
        id
        name
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

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: uuid = "") {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`;
