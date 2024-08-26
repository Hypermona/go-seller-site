import client from "../../graphql";
import { addProduct, addProductVariables } from "./__generated__/addProduct";
import { deleteProduct, deleteProductVariables } from "./__generated__/deleteProduct";
import { getProducts } from "./__generated__/getProducts";
import { updateProduct, updateProductVariables } from "./__generated__/updateProduct";
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./mutations";
import { GET_PRODUCTS } from "./queries";

class ProductService {
  async getProducts() {
    try {
      const res = await client.query<getProducts>({ query: GET_PRODUCTS });
      if (res.error || !res.data) {
        throw new Error("Failed to load Products");
      }
      return res.data.products;
    } catch (err: unknown) {
      throw new Error(err as string);
    }
  }
  async addProducts(variables: addProductVariables) {
    try {
      const res = await client.mutate<addProduct>({ mutation: ADD_PRODUCT, variables });
      if (!res.data || res.errors) {
        throw new Error("Failed to add new Product");
      }
      return res.data.insert_products_one;
    } catch (err: unknown) {
      throw new Error(err as string);
    }
  }
  async updateProducts(variables: updateProductVariables) {
    try {
      const res = await client.mutate<updateProduct>({ mutation: UPDATE_PRODUCT, variables });
      if (!res.data || res.errors) {
        throw new Error("Failed To update Products");
      }
      return res.data.update_products_by_pk;
    } catch (err: unknown) {
      throw new Error(err as string);
    }
  }
  async deleteProducts(variables: deleteProductVariables) {
    try {
      const res = await client.mutate<deleteProduct>({ mutation: DELETE_PRODUCT, variables });
      if (!res.data || res.errors) {
        throw new Error("Failed To delete Products");
      }
      return res.data.delete_products_by_pk;
    } catch (err: unknown) {
      throw new Error(err as string);
    }
  }
}

export default new ProductService();
