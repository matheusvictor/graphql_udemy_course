const { users , profileTypes } = require('../data/db.js');


module.exports = {
    hello() {
        return "Hello world!"
    },
    dateNow() {
        return new Date();
    },
    users() {
        return users;
    },
    user(_, args) {
        const selected = users.filter(u => u.id === args.id)
        console.log(selected)
        return selected ? selected[0] : null
    },
    profiles() {
        return profileTypes;
    },
    profile(_, { id }){
        const profile = profileTypes.filter(p => p.id === id)
        return profile ? profile[0]: null;
    },
    sortedNumbers() {
        const asc = (x, y) => x - y;
        const generateRandomNumer = () =>  parseInt(Math.random() * 60 + 1);

        return Array(6).fill(0)
        .map(() => generateRandomNumer())
        .map((n, _, arr) => arr.indexOf(n) === -1 ? n = generateRandomNumer : n)
        .sort(asc)
    }
}
