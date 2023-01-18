const { MongoClient } = require('mongodb');
// Configuration
const database = require('../config/database');

class MongoClientConnection {
    static instance = null;
    static db = null;

    constructor() {
        this.#validateInstanceIsSetConstructor();
        this.instance = MongoClientConnection.instance;
    }

    static initialize(instance = null) {
        MongoClientConnection.instance = instance ?? new MongoClientConnection();
    }

    static setDatabase(database) {
        MongoClientConnection.#validateInstanceIsSet();
        MongoClientConnection.db = database;
    }

    static getDatabase() {
        MongoClientConnection.#validateInstanceIsSet();
        return MongoClientConnection.db;
    }

    static #validateInstanceIsSet() {
        if(!MongoClientConnection.instance) 
            MongoClientConnection.initialize();
    }

    #validateInstanceIsSetConstructor() {
        if(!MongoClientConnection.instance) 
            MongoClientConnection.initialize(this);
    }
}
const mongoClient = new MongoClientConnection().instance;

const getDatabase = () => {
    if(!MongoClientConnection.db)
        throw new Error('Database not initialized');
    return MongoClientConnection.db;
}


const mongoConnect = async () => {
    const client = await MongoClient.connect(
        `mongodb+srv://${ database.username }:${ database.password }@${ database.host }/?retryWrites=true&w=majority`
    );
    MongoClientConnection.setDatabase(client.db());
}

module.exports = {
    db: getDatabase,
    mongoClient,
    mongoConnect,
    MongoClientConnection
}