import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getCategories,
  getCategories_categories,
} from "../services/categoriesService/__generated__/getCategories";
import categoriesService from "../services/categoriesService";
import { RootState } from "../store";
import {
  addCategory_insert_categories_one,
  addCategoryVariables,
} from "../services/categoriesService/__generated__/addCategory";

const initialState: { isPending: boolean; categories: getCategories_categories[] } = {
  isPending: false,
  categories: [],
};

export const getCategoriesCall = createAsyncThunk<
  getCategories_categories[],
  void,
  { state: RootState }
>("categories/fetch", async () => {
  return await categoriesService.getCategories();
});

export const addCategoryCall = createAsyncThunk<
  addCategory_insert_categories_one | null,
  addCategoryVariables,
  { state: RootState }
>("category/add", async (variables: addCategoryVariables) => {
  return await categoriesService.addCategory(variables);
});

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesCall.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(
      getCategoriesCall.fulfilled,
      (state, action: PayloadAction<getCategories["categories"]>) => {
        state.categories = action.payload;
        state.isPending = false;
      }
    );
    builder.addCase(getCategoriesCall.rejected, (state) => {
      state.isPending = false;
    });
    builder.addCase(addCategoryCall.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(
      addCategoryCall.fulfilled,
      (state, action: PayloadAction<addCategory_insert_categories_one | null>) => {
        if (action.payload) {
          state.categories.push(action.payload);
        }
        state.isPending = false;
      }
    );
    builder.addCase(addCategoryCall.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export default CategoriesSlice.reducer;
