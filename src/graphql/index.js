// src/graphql/index.js
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(
  "/graphql",
  authMiddleware, // Apply authentication middleware here
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL for testing
  })
);

module.exports = router;
