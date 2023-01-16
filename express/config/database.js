require('dotenv').config();

module.exports = {
    host: process.env.HOST ?? 'localhost',
    port: process.env.PORT ?? 3306,
    driver: process.env.DB_DRIVER ?? 'mysql',
    username: process.env.DB_USERNAME ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_DATABASE ?? 'app'
}