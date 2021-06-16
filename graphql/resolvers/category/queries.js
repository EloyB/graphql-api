import { Category } from "../../../db/models";

const categoryQueries = {
  categories: async (_, args) => {
    const categories = await Category.find();

    return categories;
  },
};

export default categoryQueries;
