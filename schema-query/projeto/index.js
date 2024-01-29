const { ApolloServer, gql } = require('apollo-server');

const users = [
    {
        id: 1,
        name: "Matheus",
        email: "matheus@email.com",
        age: 25,
    },
    {
        id: 2,
        name: "Maria",
        email: "maria@email.com",
        age: 25,
    }
]

const profileTypes = [
    {
        id: 1,
        description: 'Default'
    },
    {
        id: 2,
        description: 'Admin'
    }
]

const typeDefs = gql`
    scalar Date

    # Pontos de entrada para a API
    # Query é um tipo reservado no GraphQL
    type Query {
        hello: String
        dateNow: Date
        users: [User]
        user(id: Int!): User
        profiles: [Profile]
        profile(id: Int!): Profile
        productsWithDiscount: [Product]
        sortedNumbers: [Int!]!
    }

    # Tipo personalizado
    type User {
        id: Int!
        name: String
        email: String!
        age: Int
        salary: Float
        vip: Boolean
    }

    type Profile {
        id: Int!
        description: String!
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
            return users;
        },
        user(_, args) {
            const selected = users.filter(u => u.id === args.id)
            console.log(selected)
            return selected ? selected[0] : null
        },
        profiles() {
            return profileTypes;
        },
        profile(_, { id }){
            const profile = profileTypes.filter(p => p.id === id)
            return profile ? profile[0]: null;
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
        },
        sortedNumbers() {
            const asc = (x, y) => x - y;
            const generateRandomNumer = () =>  parseInt(Math.random() * 60 + 1);

            return Array(6).fill(0)
            .map(() => generateRandomNumer())
            .map((n, _, arr) => arr.indexOf(n) === -1 ? n = generateRandomNumer : n)
            .sort(asc)
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
