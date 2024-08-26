/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProducts
// ====================================================

export interface getProducts_products_category {
  __typename: "categories";
  name: string;
  id: any;
}

export interface getProducts_products_user {
  __typename: "users";
  email: string | null;
  id: any;
  image: string;
  name: string;
  is_admin: boolean | null;
}

export interface getProducts_products {
  __typename: "products";
  /**
   * An object relationship
   */
  category: getProducts_products_category;
  description: string;
  id: any;
  image: string;
  price: string;
  title: string;
  /**
   * An object relationship
   */
  user: getProducts_products_user;
}

export interface getProducts {
  /**
   * An array relationship
   */
  products: getProducts_products[];
}
