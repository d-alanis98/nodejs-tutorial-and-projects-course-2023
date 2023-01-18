require('dotenv').config();

module.exports = {
    host: process.env.MONGO_HOST ?? 'localhost',
    username: process.env.MONGO_USERNAME ?? 'admin',
    password: process.env.MONGO_PASSWORD ?? ''
}