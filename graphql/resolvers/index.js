import { userQueries, userMutations } from "./user";
import { companyQueries, companyMutations } from "./company";

const resolvers = {
  Query: {
    ...userQueries,
    ...companyQueries,
  },
  Mutation: {
    ...userMutations,
    ...companyMutations,
  },
};

export default resolvers;
