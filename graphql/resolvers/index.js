import { userQueries, userMutations, userFields } from "./user";
import { companyQueries, companyMutations } from "./company";
import { wineQueries, wineMutations, wineFields } from "./wine";

const resolvers = {
  Query: {
    ...userQueries,
    ...companyQueries,
    ...wineQueries,
  },
  Mutation: {
    ...userMutations,
    ...companyMutations,
    ...wineMutations,
  },
  ...wineFields,
  ...userFields,
};

export default resolvers;
