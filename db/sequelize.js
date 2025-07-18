const { Sequelize } = require('sequelize');
require('dotenv').config();

function createSequelizeInstance({
                                     dbName = process.env.DB_NAME || 'payments',
                                     dbUser = process.env.DB_USER || 'postgres',
                                     dbPass = process.env.DB_PASS || 'postgres',
                                     dbHost = process.env.DB_HOST || 'localhost',
                                     dbPort = process.env.DB_PORT || 5432,
                                 } = {}) {
    return new Sequelize(dbName, dbUser, dbPass, {
        host: dbHost,
        port: dbPort,
        dialect: 'postgres',
        logging: false,
    });
}

module.exports = { createSequelizeInstance };
