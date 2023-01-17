const Sequelize = require('sequelize');
// Sequelize instance
const sequelize = require('../database/sequelize');

const Product = sequelize.define(
    'Products',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        description: Sequelize.TEXT
    }
);

module.exports = Product;