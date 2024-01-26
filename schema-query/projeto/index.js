const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

    # Pontos de entrada para a API
    # Query é um tipo reservado no GraphQL
    type Query {
        hello: String
    }
`;

const resolvers = { 
    Query: {
        hello() {
            return "Hello world!"
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
