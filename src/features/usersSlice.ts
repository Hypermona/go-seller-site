import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, getUsers_users } from "../services/userService/__generated__/getUsers";
import { RootState } from "../store";
import userService from "../services/userService";
import {
  addUserVariables,
  addUser_insert_users,
  addUser_insert_users_returning,
} from "../services/userService/__generated__/addUser";
import { deleteUser, deleteUserVariables } from "../services/userService/__generated__/deleteUser";

export interface IUsersData {
  isLoading: boolean;
  users: getUsers["users"];
  currentUser?: addUser_insert_users_returning[];
}

const initialState: IUsersData = {
  isLoading: false,
  users: [],
  currentUser: undefined,
};

export const fetchUsers = createAsyncThunk<getUsers["users"], void, { state: RootState }>(
  "fetchUsers",
  async () => {
    const users = await userService.getUsers();
    return users;
  }
);

export const AddUsers = createAsyncThunk<
  addUser_insert_users["returning"],
  addUserVariables,
  { state: RootState }
>("addUsers", async (variables: addUserVariables) => {
  const users = await userService.addUser(variables);
  console.log("users", users);
  return users;
});

export const DeleteUser = createAsyncThunk<
  deleteUser["delete_users_by_pk"],
  deleteUserVariables,
  { state: RootState }
>("deleteUser", async (variables: deleteUserVariables) => {
  return await userService.deleteUser(variables);
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<getUsers_users>) => {
      state.currentUser = [action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<getUsers["users"]>) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(AddUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      AddUsers.fulfilled,
      (state, action: PayloadAction<addUser_insert_users["returning"]>) => {
        state.currentUser = action.payload;
        for (const user of action.payload) {
          state.users.push(user);
        }
        state.isLoading = false;
      }
    );
    builder.addCase(AddUsers.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(DeleteUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      DeleteUser.fulfilled,
      (state, action: PayloadAction<deleteUser["delete_users_by_pk"]>) => {
        if (!action.payload) {
          return state;
        }
        state.users = state.users.filter((user) => user.id !== action.payload?.id);
        state.isLoading = false;
      }
    );
    builder.addCase(DeleteUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export const { setCurrentUser } = usersSlice.actions;
export const userSelector = (state: RootState) => state.users;
export default usersSlice.reducer;

// TODO: add delete, take to home screen
