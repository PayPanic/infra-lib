const { Sequelize } = require('sequelize');
require('dotenv').config();

function createSequelizeInstance({
                                     dbName = process.env.DB_NAME,
                                     dbUser = process.env.DB_USER,
                                     dbPass = process.env.DB_PASS,
                                     dbHost = process.env.DB_HOST,
                                     dbPort = process.env.DB_PORT || 5432,
                                 }) {
    return new Sequelize(dbName, dbUser, dbPass, {
        host: dbHost,
        port: dbPort,
        dialect: 'postgres',
        logging: false,
    });
}

module.exports = { createSequelizeInstance };
