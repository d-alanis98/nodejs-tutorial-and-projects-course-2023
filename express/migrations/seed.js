const sequelize = require('../database/sequelize');
const Cart = require('../models/cart');
const CartItem = require('../models/cartItem');
const Product = require('../models/product');
const User = require('../models/userWithSequelize');

const setUpAssociations = () => {
    // User -> Products
    Product.belongsTo(User, { 
        constraints: true, 
        onDelete: 'CASCADE',
        foreignKey: 'user_id'
    });
    User.hasMany(Product, { foreignKey: 'user_id' });
    // User -> Cart
    User.hasOne(Cart, { foreignKey: 'user_id' });
    Cart.belongsTo(User, {
        constraints: true,
        onDelete: 'CASCADE', 
        foreignKey: 'user_id' 
    });
    // Products <-> Cart through CartItem as pivot
    Product.belongsToMany(Cart, { through: CartItem, foreignKey: 'product_id', as: 'cart' });
    Cart.belongsToMany(Product, { through: CartItem, foreignKey: 'cart_id', as: 'products' });
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