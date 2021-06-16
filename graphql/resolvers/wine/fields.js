import { Category, Grape, Vineyard, WineCategories } from "../../../db/models";

const wineFields = {
  Wine: {
    categories: async (wine) => {
      const wineCategories = await WineCategories.find({ wine: wine._id });

      const categories = await Category.find({
        _id: { $in: wineCategories.map(({ category }) => category) },
      });

      return categories;
    },
    vineyard: async (wine) => {
      const vineyard = await Vineyard.findById(wine.vineyard);

      return vineyard;
    },
    grape: async (wine) => {
      const grape = await Grape.findById(wine.grape);

      return grape;
    },
  },
};

export default wineFields;
