const { profileTypes } = require('../../data/db.js');


module.exports = {
    profiles() {
        return profileTypes;
    },
    profile(_, { id }){
        const profile = profileTypes.filter(p => p.id === id)
        return profile ? profile[0]: null;
    },
}
