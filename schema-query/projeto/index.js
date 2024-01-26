const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

    # Pontos de entrada para a API
    # Query é um tipo reservado no GraphQL
    type Query {
        hello: String
        dateNow: Date
        users: [User]
    }

    # Tipo personalizado
    type User {
        id: ID!
        name: String
        email: String!
        age: Int
        salary: Float
        vip: Boolean
    }
`;

const resolvers = { 

    User: {
        salary(parenteObj) {
            return parenteObj.income;
        }
    },
    Query: {
        hello() {
            return "Hello world!"
        },
        dateNow() {
            return new Date();
        },
        users() {
            return [
                {
                    id: 1,
                    email: "",
                    income: 230.0,
                },
                {
                    id: 2,
                    email: "",
                }
            ]
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
