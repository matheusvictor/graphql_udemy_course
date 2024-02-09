const { profileTypes } = require('../data/db');

module.exports = {
    profile(user) {
        const profileDescription = 
            profileTypes.filter(p => p.id === user.profile_id)
            return profileDescription ? profileDescription[0] : null;
    }
}
