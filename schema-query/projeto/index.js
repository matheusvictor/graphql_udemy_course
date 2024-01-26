const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

    # Pontos de entrada para a API
    # Query é um tipo reservado no GraphQL
    type Query {
        hello: String
        dateNow: Date
        users: [User]
        productsWithDiscount: [Product]
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

    type Product {
        name: String!
        price: Float!
        discount: Float
        priceWithDiscount: Float
    }
`;

const resolvers = { 

    User: {
        salary(parentObj) {
            return parentObj.income;
        }
    },
    Product: {
        priceWithDiscount(parentObj) {
            if (parentObj.discount && parentObj.discount <= 100) {
               return parentObj.price - (parentObj.price * (parentObj.discount/100));
            }
            return parentObj.price;
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
        },
        productsWithDiscount() {
            return [
                {
                    name: "Laptop",
                    price: 5000.0,
                    discount: 10
                },
                {
                    name: "PlayStation 5",
                    price: 3000.0,
                },
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
