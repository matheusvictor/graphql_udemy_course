const { v4: uuidv4 } = require('uuid');

const random_uuid = uuidv4();

const users = [
    {
        id: random_uuid,
        name: "Matheus",
        email: "matheus@email.com",
        age: 25,
        profile_id: 1,
    },
    {
        id: random_uuid,
        name: "Maria",
        email: "maria@email.com",
        age: 25,
        profile_id: 2,
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

module.exports = { users, profileTypes };
