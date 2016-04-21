import {
    GraphQLString,
    GraphQLObjectType
} from 'graphql';

let UserType = new GraphQLObjectType({
    name: 'User',
    description: 'I make it up as I go...',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        }
    })
});

export default UserType;
