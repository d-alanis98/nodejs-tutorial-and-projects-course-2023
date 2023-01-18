const { ObjectId } = require('mongodb');
// Database
const { db } = require('../database/mongodb');
// Utils
const { ErrorWithStatusCode } = require('../../express/utils/errors');

 

class Product {
    constructor({
        title,
        price, 
        imageUrl,
        description,
    }) {
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    toPrimitiveValues = () => ({
        title: this.title,
        price: this.price,
        imageUrl: this.imageUrl,
        description: this.description
    });

    save = async () => await db().collection('products').insertOne(this);

    static async get() {
        return await db().collection('products').find().toArray();
    }

    static async getById(id) {
        const product = await db().collection('products').findOne({ _id: new ObjectId(id) })
        if(!product)
            throw new ErrorWithStatusCode({
                statusCode: 404,
                statusMessage: `Product with id ${ id } not found`
            });
        return product;
    }
}

module.exports = Product;