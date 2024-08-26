/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteUser
// ====================================================

export interface deleteUser_delete_users_by_pk {
  __typename: "users";
  id: any;
}

export interface deleteUser {
  /**
   * delete single row from the table: "users"
   */
  delete_users_by_pk: deleteUser_delete_users_by_pk | null;
}

export interface deleteUserVariables {
  id: any;
}
