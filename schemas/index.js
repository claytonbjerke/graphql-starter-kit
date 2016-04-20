import {
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql';

import data from '../data.json';

var userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        }
    }
});

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: userType,
                args: {
                    id: {
                        type: GraphQLString
                    }
                },
                resolve: function(_, args) {
                    return data[args.id];
                }
            }
        }
    })
});

export default schema;
