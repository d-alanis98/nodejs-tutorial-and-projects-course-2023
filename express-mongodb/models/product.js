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
        _id = null
    }) {
        this._id = _id;
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    toPrimitiveValues = () => ({
        _id: this._id,
        title: this.title,
        price: this.price,
        imageUrl: this.imageUrl,
        description: this.description,
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

    update = async () => {
        const { _id, ...fieldsToUpdate } = this;
        return await db().collection('products').updateOne(
            { _id: new ObjectId(_id) },
            { 
                $set: fieldsToUpdate
            }
        )
    }
}

module.exports = Product;