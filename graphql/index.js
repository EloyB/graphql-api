import { ApolloServer } from "apollo-server-express";
import { env } from "../config/environment";
import schema from "./schema";
import Auth from "../auth";

const apolloServer = new ApolloServer({
  schema,
  playground: env.development,
  context: Auth,
});

export default apolloServer;
