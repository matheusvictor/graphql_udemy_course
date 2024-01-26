const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

    # Pontos de entrada para a API
    # Query é um tipo reservado no GraphQL
    type Query {
        hello: String
        dateNow: Date
    }
`;

const resolvers = { 
    Query: {
        hello() {
            return "Hello world!"
        },
        dateNow() {
            return new Date();
        }
    }
};

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

server
    .listen()
    .then(({url}) => {
        console.log(`Executando em ${url}`)
});
