const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, 
       GraphQLID, GraphQLInt, GraphQLSchema } = graphql;

//Schema defines data on the Graph like object types(book type), relation between 
//these object types and descibes how it can reach into the graph to interact with 
//the data to retrieve or mutate the data   

var fakeUserDatabase = [
    { name:"user 1", pages:432 , id:1},
    { name: "user 2", pages: 32, id: 2},
    { name: "user 3", pages: 532, id: 3 }
]

const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLID  },
        name: { type: GraphQLString }, 
        pages: { type: GraphQLInt }
    })
});

//RootQuery describe how users can use the graph and grab data.
//E.g Root query to get all authors, get all users, get a particular user 
//or get a particular author.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: userType,
            //argument passed by the user while making the query
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //Here we define how to get data from database source

                //this will return the user with id passed in argument by the user
                return fakeuserDatabase.find((item) => { return item.id == args.id});
            }
        }
    }
});
 
//Creating a new GraphQL Schema, with options query which defines query 
//we will allow users to use when they are making request.
module.exports = new GraphQLSchema({
    query: RootQuery
});