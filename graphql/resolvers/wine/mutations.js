import { Wine } from "../../../db/models";

const wineMutations = {
  wines: async (_, args) => {
    const wines = await Wine.find();

    return wines;
  },
};

export default wineMutations;
