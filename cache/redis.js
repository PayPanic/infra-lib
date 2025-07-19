const Redis = require('ioredis');
require('dotenv').config();

function createRedisClient() {
    return new Redis({
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT,
    });
}

module.exports = { createRedisClient };
