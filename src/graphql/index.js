const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(
  "/graphql",
  authMiddleware,
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

module.exports = router;
