const Sequelize = require('sequelize').Sequelize;
// Database configuration
const {
    host,
    port,
    driver,
    username,
    password,
    database
} = require('../config/database');

// Operator Aliases
const Op = Sequelize.Op;

const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}

const sequelize = new Sequelize({
    host,
    port,
    username,
    password,
    database,
    dialect: driver,
    operatorsAliases
});



module.exports = sequelize;
