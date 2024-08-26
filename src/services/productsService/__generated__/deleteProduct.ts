/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteProduct
// ====================================================

export interface deleteProduct_delete_products_by_pk {
  __typename: "products";
  id: any;
}

export interface deleteProduct {
  /**
   * delete single row from the table: "products"
   */
  delete_products_by_pk: deleteProduct_delete_products_by_pk | null;
}

export interface deleteProductVariables {
  id?: any | null;
}
