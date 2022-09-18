// import {Sequelize} from 'sequelize';
const Sequelize = require('sequelize');
// import mysql from 'mysql2';

const database = process.env.DATABASE_NAME     // database name
const user = process.env.DATABASE_USER         // user name
const password = process.env.DATABASE_PASSWORD // password

const conf = {
  host: process.env.DATABASE_HOST,             // db address
  port: process.env.DATABASE_PORT,
  dialect: 'mysql',                            // db type
  pool: {                                      // db pool
    max: 20,
    min: 5,
    idle: 10000
  },
  dialectOptions: {
    charset: 'utf8mb4',
    dateStrings: true,
    typeCast: true
  } 
}
export default new Sequelize(database, user, password, conf)
