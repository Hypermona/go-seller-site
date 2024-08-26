/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addCategory
// ====================================================

export interface addCategory_insert_categories_one {
  __typename: "categories";
  id: any;
  name: string;
}

export interface addCategory {
  /**
   * insert a single row into the table: "categories"
   */
  insert_categories_one: addCategory_insert_categories_one | null;
}

export interface addCategoryVariables {
  name?: string | null;
}
