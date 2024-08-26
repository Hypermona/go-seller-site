import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts_products } from "../services/productsService/__generated__/getProducts";
import productsService from "../services/productsService";
import { RootState } from "../store";
import {
  addProductVariables,
  addProduct_insert_products_one,
} from "../services/productsService/__generated__/addProduct";
import {
  updateProductVariables,
  updateProduct_update_products_by_pk,
} from "../services/productsService/__generated__/updateProduct";
import {
  deleteProductVariables,
  deleteProduct_delete_products_by_pk,
} from "../services/productsService/__generated__/deleteProduct";

const initialState: { isPending: boolean; products: getProducts_products[] } = {
  isPending: false,
  products: [],
};

export const getProductsCall = createAsyncThunk<getProducts_products[], void, { state: RootState }>(
  "products/get",
  async () => {
    return await productsService.getProducts();
  }
);
export const addProductsCall = createAsyncThunk<
  addProduct_insert_products_one | null,
  addProductVariables,
  { state: RootState }
>("products/add", async (variables: addProductVariables) => {
  return await productsService.addProducts(variables);
});
export const updateProductsCall = createAsyncThunk<
  updateProduct_update_products_by_pk | null,
  updateProductVariables,
  { state: RootState }
>("products/update", async (variables: updateProductVariables) => {
  return await productsService.updateProducts(variables);
});

export const deleteProductsCall = createAsyncThunk<
  deleteProduct_delete_products_by_pk | null,
  deleteProductVariables,
  { state: RootState }
>("products/delete", async (variables: deleteProductVariables) => {
  return await productsService.deleteProducts(variables);
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsCall.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getProductsCall.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isPending = false;
    });
    builder.addCase(getProductsCall.rejected, (state) => {
      state.isPending = false;
    });

    builder.addCase(addProductsCall.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(addProductsCall.fulfilled, (state, action) => {
      if (action.payload) state.products.push(action.payload);
      state.isPending = false;
    });
    builder.addCase(addProductsCall.rejected, (state) => {
      state.isPending = false;
    });
    builder.addCase(updateProductsCall.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(updateProductsCall.fulfilled, (state, action) => {
      for (let product of state.products) {
        if (action.payload && product.id === action.payload?.id) {
          product = action.payload;
        }
      }
      state.isPending = false;
    });
    builder.addCase(updateProductsCall.rejected, (state) => {
      state.isPending = false;
    });
    builder.addCase(deleteProductsCall.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(deleteProductsCall.fulfilled, (state, action) => {
      if (action.payload)
        state.products = state.products.filter((product) => product.id !== action.payload?.id);
      state.isPending = false;
    });
    builder.addCase(deleteProductsCall.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export default productsSlice.reducer;
