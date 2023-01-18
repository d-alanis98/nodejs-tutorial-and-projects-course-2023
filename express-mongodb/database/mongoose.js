const mongoose = require('mongoose');
// Configuration
const database = require('../config/database');

const connection = mongoose.connect(
    `mongodb+srv://${ database.username }:${ database.password }@${ database.host }/?retryWrites=true&w=majority`
);

module.exports = connection;