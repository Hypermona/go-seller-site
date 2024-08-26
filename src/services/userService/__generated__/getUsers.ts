/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsers
// ====================================================

export interface getUsers_users {
  __typename: "users";
  id: any;
  email: string | null;
  image: string;
  is_admin: boolean | null;
  name: string;
  created_at: any | null;
}

export interface getUsers {
  /**
   * fetch data from the table: "users"
   */
  users: getUsers_users[];
}
