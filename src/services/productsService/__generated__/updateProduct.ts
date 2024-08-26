/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateProduct
// ====================================================

export interface updateProduct_update_products_by_pk_category {
  __typename: "categories";
  id: any;
  name: string;
}

export interface updateProduct_update_products_by_pk_user {
  __typename: "users";
  email: string | null;
  id: any;
  image: string;
  name: string;
  is_admin: boolean | null;
}

export interface updateProduct_update_products_by_pk {
  __typename: "products";
  /**
   * An object relationship
   */
  category: updateProduct_update_products_by_pk_category;
  description: string;
  id: any;
  image: string;
  price: string;
  title: string;
  /**
   * An object relationship
   */
  user: updateProduct_update_products_by_pk_user;
}

export interface updateProduct {
  /**
   * update single row of the table: "products"
   */
  update_products_by_pk: updateProduct_update_products_by_pk | null;
}

export interface updateProductVariables {
  title?: string | null;
  id?: any | null;
  price?: string | null;
  image?: string | null;
  description?: string | null;
  category_id?: any | null;
}
