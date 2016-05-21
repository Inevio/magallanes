'use strict';

module.exports = require('redis').createClient({ host : process.env.REDIS_HOST || 'localhost' });
