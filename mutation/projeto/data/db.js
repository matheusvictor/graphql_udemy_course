let id = 1;
function nextId () {
    return id++;
}

const users = [
    {
        id: nextId(),
        name: "Matheus",
        email: "matheus@email.com",
        age: 25,
        profile_id: 1,
    },
    {
        id: nextId(),
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

module.exports = { 
    users,
    profileTypes,
    nextId
};
