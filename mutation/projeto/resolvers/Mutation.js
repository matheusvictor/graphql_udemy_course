const { users, nextId } = require('../data/db');

module.exports = {

    newUser(_, { name, email, age }) {
        
        const emailExists = users.some(user => user.email === email);

        if (emailExists) {
            throw new Error('Email already exists');
        }

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
