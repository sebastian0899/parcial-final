const { Sequelize } = require('sequelize');
const defineModels = require('../db/models/index')
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.DB_HOST);

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dialect:process.env.DB_ENGINER
});

defineModels( sequelize )

sequelize.sync()

module.exports = sequelize