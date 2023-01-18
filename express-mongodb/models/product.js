const { db } = require('../database/mongodb');

 

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
}

module.exports = Product;