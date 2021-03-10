"use strict";
var { buildSchema } = require('graphql');
const schemaModule = buildSchema(`
type Query {
  hello: String
}
`);
module.exports = schemaModule;
