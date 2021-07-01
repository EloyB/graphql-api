import { userQueries, userMutations, userFields } from "./user";
import { companyQueries, companyMutations } from "./company";
import { wineQueries, wineMutations, wineFields } from "./wine";
import { categoryQueries, categoryMutations } from "./category";
import { orderQueries, orderMutations, orderFields } from "./order";

const resolvers = {
  Query: {
    ...userQueries,
    ...companyQueries,
    ...wineQueries,
    ...categoryQueries,
    ...orderQueries,
  },
  Mutation: {
    ...userMutations,
    ...companyMutations,
    ...wineMutations,
    ...categoryMutations,
    ...userMutations,
  },
  ...wineFields,
  ...userFields,
  ...orderFields,
};

export default resolvers;
