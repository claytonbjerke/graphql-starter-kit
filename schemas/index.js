import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} from 'graphql';

import data from '../data.json';
import UserType from './types/user';
let allUsers = {
    type: new GraphQLList(UserType),
    description: 'all das ppl',
    resolve: () => [data[1],data[2],data[3]]
};

let userById = {
    type: UserType,
    args: {
        id: {
            type: GraphQLString
        }
    },
    resolve(_, args) {
        return data[args.id];
    }
};

let query = new GraphQLObjectType({
    name: 'Root',
    fields: () => ({
        allUsers: allUsers,
        user: userById
    })
});

export default new GraphQLSchema({
    query: query
});
