/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCategories
// ====================================================

export interface getCategories_categories {
  __typename: "categories";
  id: any;
  name: string;
}

export interface getCategories {
  /**
   * fetch data from the table: "categories"
   */
  categories: getCategories_categories[];
}
