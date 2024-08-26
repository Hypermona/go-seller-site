import client from "../../graphql";
import { addUser, addUserVariables } from "./__generated__/addUser";
import { deleteUser, deleteUserVariables } from "./__generated__/deleteUser";
import { getUsers_users } from "./__generated__/getUsers";
import { ADD_USER, DELETE_USER } from "./mutations";
import { GET_USERS } from "./queries";

class UserService {
  async getUsers(): Promise<getUsers_users[]> {
    try {
      const users = await client.query({ query: GET_USERS });
      console.log("  dfdfd", users);
      if (users.error || !users.data) {
        throw new Error("Failed To fetch Users");
      }
      return users.data.users;
    } catch (err: unknown) {
      console.log(typeof err, err);
      throw new Error(err as string);
    }
  }
  async addUser(variables: addUserVariables) {
    try {
      const userData = await client.mutate<addUser>({ mutation: ADD_USER, variables });
      if (userData.errors || !userData.data) {
        throw new Error("Add Failed");
      }
      return userData?.data?.insert_users?.returning || [];
    } catch (err: unknown) {
      throw new Error(err as string);
    }
  }
  async deleteUser(variables: deleteUserVariables): Promise<deleteUser["delete_users_by_pk"]> {
    try {
      const res = await client.mutate<deleteUser>({ mutation: DELETE_USER, variables });
      if (res.errors || !res.data) {
        throw new Error("Add Failed");
      }
      return res.data.delete_users_by_pk;
    } catch (err: unknown) {
      throw new Error(err as string);
    }
  }
}

export default new UserService();
