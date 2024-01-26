const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

    # Pontos de entrada para a API
    # Query é um tipo reservado no GraphQL
    type Query {
        hello: String
        dateNow: String
    }
`;

const resolvers = { 
    Query: {
        hello() {
            return "Hello world!"
        },
        dateNow() {
            const dT = new Date()
                            .toLocaleDateString("pt-BR", {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            });
            return dT;
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
