/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addUser
// ====================================================

export interface addUser_insert_users_returning {
  __typename: "users";
  id: any;
  email: string | null;
  image: string;
  is_admin: boolean | null;
  name: string;
  created_at: any | null;
}

export interface addUser_insert_users {
  __typename: "users_mutation_response";
  /**
   * data from the rows affected by the mutation
   */
  returning: addUser_insert_users_returning[];
}

export interface addUser {
  /**
   * insert data into the table: "users"
   */
  insert_users: addUser_insert_users | null;
}

export interface addUserVariables {
  name?: string | null;
  is_admin?: boolean | null;
  image?: string | null;
  email?: string | null;
  password?: string | null;
}
