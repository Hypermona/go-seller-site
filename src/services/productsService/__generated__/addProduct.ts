/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addProduct
// ====================================================

export interface addProduct_insert_products_one_category {
  __typename: "categories";
  id: any;
  name: string;
}

export interface addProduct_insert_products_one_user {
  __typename: "users";
  email: string | null;
  id: any;
  image: string;
  name: string;
  is_admin: boolean | null;
}

export interface addProduct_insert_products_one {
  __typename: "products";
  /**
   * An object relationship
   */
  category: addProduct_insert_products_one_category;
  description: string;
  id: any;
  image: string;
  price: string;
  title: string;
  /**
   * An object relationship
   */
  user: addProduct_insert_products_one_user;
}

export interface addProduct {
  /**
   * insert a single row into the table: "products"
   */
  insert_products_one: addProduct_insert_products_one | null;
}

export interface addProductVariables {
  image?: string | null;
  description?: string | null;
  category_id?: any | null;
  price?: string | null;
  seller_id?: any | null;
  title?: string | null;
}
