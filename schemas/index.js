var graphql = require('graphql');
var data = require('../data.json');

var userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: graphql.GraphQLString
        },
        name: {
            type: graphql.GraphQLString
        }
    }
});

var schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: userType,
                args: {
                    id: {
                        type: graphql.GraphQLString
                    }
                },
                resolve: function (_, args) {
                    return data[args.id];
                }
            }
        }
    })
});

module.exports = schema;
