const expressJwt = require('express-jwt');
const config = require('../config.json');

module.exports = jwtExpress;

function jwtExpress() {
    const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [
            // public routes that don't require authentication
            '/authenticate'
        ]
    });
}