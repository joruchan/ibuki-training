const expressJwt = require('express-jwt');
const config = require('../config.json');


function jwtExpress() {
  const { secret } = config;
  return expressJwt({ secret }).unless({
    path: [
      // public routes that don't require authentication
      '/authenticate',
      '/send_message',
      '/register',
      '/bookings',
      '/bookings/:id',
      '/messages',
      '/messages/:id',
    ],
  });
}

module.exports = jwtExpress;
