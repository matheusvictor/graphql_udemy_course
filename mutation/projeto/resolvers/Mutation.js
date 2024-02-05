const { users, nextId } = require('../data/db');

module.exports = {
    newUser(_, { name, email, age }) {
        const newUser = {
            id: nextId(),
            name,
            email,
            age,
            profile: 1,
            status: 'ACTIVE',
        }
        users.push(newUser);
        return newUser;
    }
}
