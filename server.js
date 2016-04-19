var graphqlHTTP = require('express-graphql');
var express = require('express');

var schema = require('./schemas/index')

express()
    .use('/graphql', graphqlHTTP({
        schema: schema,
        pretty: true,
        graphiql: true
    }))
    .listen(3000);

console.log('GraphQL server running on http://localhost:3000/graphql');
