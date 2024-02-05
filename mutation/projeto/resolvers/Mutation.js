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
    },
    deleteUser(_, { id }) {
        const index = users.findIndex(user => user.id === id);
        
        // index -1 = not found
        if (index < 0 ){
            return null;
        } else {
            const exclued = users.splice(index, 1);
            return exclued ? exclued[0] : null;
        }
    }
}
