const { users } = require('../../data/db.js');


module.exports = {
    users() {
        return users;
    },
    user(_, {  filter }) {
        if (!filter) return null;

        const { id, email } = filter;
        if (id) {
            return users.filter(u => u.id === id)[0];
        } else if (email) {
            return users.filter(u => u.email === email)[0];
        } 
        return null;
    },
    profile(user) {
        const profileDescription = 
            profileTypes.filter(p => p.id === user.profile_id)
            return profileDescription ? profileDescription[0] : null;
    }
}
