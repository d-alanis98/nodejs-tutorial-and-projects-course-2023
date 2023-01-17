const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const CartItem = sequelize.define(
    'CartItem',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        quantity: Sequelize.INTEGER
    }
);

module.exports = CartItem;