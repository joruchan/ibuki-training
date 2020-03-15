const jwt = require('jsonwebtoken');
const config = require('../config.json');
const users = require('../users.json');

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
    return 'no user';
}

module.exports = {
    authenticate
};
