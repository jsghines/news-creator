import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { RSSResolver } from "./resolvers/rss";

var express = require('express');
createConnection().then(async connection => {
  const schema = await buildSchema({
    resolvers: [RSSResolver],
    emitSchemaFile: true,
    validate: false,
  });
  const app = express();
  const server = new ApolloServer({
    schema, playground: {
      settings: {
        'editor.theme': 'light',
      },
      tabs: [{endpoint:"graphql", query:'doesntmatter'}]
    }
  });
  server.applyMiddleware({app});
  app.listen(4000);
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});