const { profileTypes, nextId } = require('../../data/db');

function findProfileIndex(filter) {
    if (!filter) return -1;

    const { id, description } = filter;
    if (filter) {
        if (id) {
            return profileTypes.findIndex(p => p.id == id);
        } else if (description) {
            return profileTypes.findIndex(p => p.description === description);
        }
    }
    return -1;
}

module.exports = {

    newProfileType(_, { profileData }) {
        const profileExists = profileTypes.some(p => p.description === profileData.description);

        if (profileExists) {
            throw new Error('Profile already exists');
        }

        const newProfile = {
            id: nextId(),
            ...profileData
        }
        profileTypes.push(newProfile);
        return newProfile;
    },
    deleteProfileType(_, { filter }) {
        const index = findProfileIndex(filter);

        if (index < 0) {
            return null;
        }

        const exclued = profileTypes.splice(index, 1);
        return exclued ? exclued[0] : null;

    },
    updateProfileType(_, { filter, profileData }) {
        const index = findProfileIndex(filter);
        if (index < 0) {
            return null;
        }

        const profileUpdated = {
            ...profileTypes[index],
            ...profileData
        }
        profileTypes.splice(index, 1, profileUpdated);
        return profileUpdated;

    }
}
