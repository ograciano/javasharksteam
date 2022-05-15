const { Sequelize } = require("sequelize");
require('dotenv').config();

const db_name = process.env.DB_NAME;
const db_password = process.env.PASSWORD_SQL;
const db_user = process.env.DB_USER;
const db_port = process.env.DB_PORT;
const db_host = process.env.DB_HOST;
const db = new Sequelize(db_name, db_user, db_password, {
    dialect: 'mssql',
    host: db_host,
    port: db_port
})

module.exports = db;