const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const schemasPath = './schemas/index.graphql';

const server = new ApolloServer({
    typeDefs: importSchema(schemasPath),
    resolvers: resolvers,
});

server
    .listen()
    .then(({url}) => {
        console.log(`Executando em ${url}`)
});
