const { profileTypes } = require('../../data/db.js');


module.exports = {
    profiles() {
        return profileTypes;
    },
    profile(_, { filter }){
        if (!filter) return null;

        const { id, description } = filter;
        if (id) {
            return profileTypes.filter(p => p.id === id)[0];
        } else if (description) {
            return profileTypes.filter(p => p.description === description)[0];
        }
        return null;
    },
}
