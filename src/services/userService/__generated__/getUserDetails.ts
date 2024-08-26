/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserDetails
// ====================================================

export interface getUserDetails_users_products_category {
  __typename: "categories";
  name: string;
}

export interface getUserDetails_users_products {
  __typename: "products";
  description: string;
  id: any;
  image: string;
  price: string;
  title: string;
  /**
   * An object relationship
   */
  category: getUserDetails_users_products_category;
}

export interface getUserDetails_users {
  __typename: "users";
  id: any;
  email: string | null;
  image: string;
  is_admin: boolean | null;
  name: string;
  created_at: any | null;
  /**
   * An array relationship
   */
  products: getUserDetails_users_products[];
}

export interface getUserDetails {
  /**
   * fetch data from the table: "users"
   */
  users: getUserDetails_users[];
}

export interface getUserDetailsVariables {
  id?: any | null;
}
