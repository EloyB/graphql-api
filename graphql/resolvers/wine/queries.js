import { Wine } from "../../../db/models";

const wineQueries = {
  wines: async (_, args) => {
    const wines = await Wine.find();

    return wines;
  },
};

export default wineQueries;
