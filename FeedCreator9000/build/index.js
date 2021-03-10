"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const rss_1 = require("./resolvers/rss");
var express = require('express');
typeorm_1.createConnection().then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [rss_1.RSSResolver],
        emitSchemaFile: true,
        validate: false,
    });
    const app = express();
    const server = new apollo_server_express_1.ApolloServer({
        schema, playground: {
            settings: {
                'editor.theme': 'light',
            },
            tabs: [{ endpoint: "graphql", query: 'doesntmatter' }]
        }
    });
    server.applyMiddleware({ app });
    app.listen(4000);
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
}));
