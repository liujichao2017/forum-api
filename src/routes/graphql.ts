//graphql.ts
import Router from 'koa-router';

import { graphqlHTTP } from 'koa-graphql';
import GraphQLDefaultSchema from "../schemas";
const graphqlRouter = new Router();

graphqlRouter.all(
  '/graphql',
  graphqlHTTP({
    schema: GraphQLDefaultSchema,
    graphiql: true,
  }),
);

module.exports = graphqlRouter;