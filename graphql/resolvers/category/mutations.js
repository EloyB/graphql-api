import { Category, Wine, WineCategory } from "../../../db/models";

const categoryMutations = {
  addCategory: async (_, { category }) => {
    const newCategory = new Category(category);

    return newCategory.save();
  },
};

export default categoryMutations;
