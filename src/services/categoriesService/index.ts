import client from "../../graphql";
import { addCategory, addCategoryVariables } from "./__generated__/addCategory";
import { getCategories } from "./__generated__/getCategories";
import { ADD_CATEGORY } from "./mutations";
import { GET_CATEGORIES } from "./queries";

class CatergoryService {
  async getCategories() {
    try {
      const res = await client.query<getCategories>({ query: GET_CATEGORIES });
      if (res.error || !res.data) {
        throw new Error("Failed to get categories");
      }
      return res.data.categories;
    } catch (err: unknown) {
      throw new Error(err as string);
    }
  }
  async addCategory(variables: addCategoryVariables) {
    try {
      const res = await client.mutate<addCategory>({ mutation: ADD_CATEGORY, variables });
      if (!res.data || res.errors) {
        throw new Error("Failed to add categories");
      }
      return res.data.insert_categories_one;
    } catch (err: unknown) {
      throw new Error("Failed to get categories" + (err as string));
    }
  }
}

export default new CatergoryService();
