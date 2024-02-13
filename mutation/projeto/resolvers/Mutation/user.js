const { users, nextId } = require('../../data/db');

function findUserIndex(filter) {
    
    if (!filter) return -1;

    const { id, email } = filter;
    if (filter) {
        if (id) {
           return users.findIndex(user => user.id === id);
        } else if (email) {
            return users.findIndex(user => user.email === email);
        }
    }
    return -1;
}

module.exports = {

    newUser(_, { userData }) {        
        const emailExists = users.some(user => user.email === userData.email);

        if (emailExists) {
            throw new Error('Email already exists');
        }

        const newUser = {
            id: nextId(),
           ...userData,
            profile: 1,
            status: 'ACTIVE',
        }
        users.push(newUser);
        return newUser;
    },
    deleteUser(_, { filter }) {
        const index = findUserIndex(filter);

        if (index < 0) {
            return null;
        }	
           
        const exclued = users.splice(index, 1);
        return exclued ? exclued[0] : null;
    }, 
    updateUser(_, { filter, userData } ) {
        const index = findUserIndex(filter);
        if (index < 0) {
            return null;
        }	

        const userUpdated = {
                ...users[index],
                ...userData // irá sobrescrever os valores do objeto user[index] para as mesmas chaves
            }
        users.splice(index, 1, userUpdated);
        return userUpdated;
    }
}
