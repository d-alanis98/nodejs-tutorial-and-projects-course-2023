const Sequelize = require('sequelize');
// Database facade
const sequelize = require('../database/sequelize');

const User = sequelize.define(
    'Users',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        dob: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }
);


module.exports = User;