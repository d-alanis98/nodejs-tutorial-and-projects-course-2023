const mysql = require('mysql2');
// Database configuration
const {
    host,
    port,
    username,
    password,
    database
} = require('../config/database');


const connectionPool = mysql.createPool({
    host,
    port,
    user: username,
    password,
    database,
});

module.exports = connectionPool.promise();