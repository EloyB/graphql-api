import { Wine, WineCategory } from "../../../db/models";

const wineMutations = {
  addWine: async (_, {wine}) => {
    const newWine = new Wine(wine);

    if (newWine.categories != null) {
      for (let i = 0; i < wine.categories.length; i++) {
        const wineCategory = new WineCategory({wine: wine._id, category: wine.categories[i]._id});
        await wineCategory.save();
      }
    }

    return newWine.save();
  },
};

export default wineMutations;
