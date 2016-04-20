import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schemas/index';

const app = express();
const port = 5000;

app.all('/graphql', (req, res) => res.redirect('/'));

app.use('/', graphqlHTTP(() => ({
        schema: schema,
        graphiql: true
    })))
    .listen(port);

console.log('Listening on port: ', port);
