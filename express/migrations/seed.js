const sequelize = require('../database/sequelize');

const runMigrations = async (callback) => {
    try {
        await sequelize.sync();
        console.log('Successfully executed migrations');
        callback();
    } catch(error) {
        console.error(error);
    }
}

module.exports = runMigrations;