const sequelize = require('../database/sequelize');
const Product = require('../models/product');
const User = require('../models/userWithSequelize');

const setUpAssociations = () => {
    Product.belongsTo(User, { 
        constraints: true, 
        onDelete: 'CASCADE',
        foreignKey: 'user_id'
    });
    User.hasMany(Product, { foreignKey: 'user_id' });
}

const runMigrations = async (callback) => {
    try {
        setUpAssociations();
        await sequelize.sync();
        console.log('Successfully executed migrations');
        callback();
    } catch(error) {
        console.error(error);
    }
}

module.exports = runMigrations;