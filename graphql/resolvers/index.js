import { userQueries, userMutations, userFields } from "./user";
import { companyQueries, companyMutations } from "./company";
import { wineQueries, wineMutations, wineFields } from "./wine";
import { categoryQueries, categoryMutations } from "./category";

const resolvers = {
  Query: {
    ...userQueries,
    ...companyQueries,
    ...wineQueries,
    ...categoryQueries,
  },
  Mutation: {
    ...userMutations,
    ...companyMutations,
    ...wineMutations,
    ...categoryMutations,
  },
  ...wineFields,
  ...userFields,
};

export default resolvers;
