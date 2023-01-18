const Product = require("../models/product");

module.exports = {
    get: async (req, res, next) => {
        try {
            const products = await Product.get();
            return res.json(products);
        } catch(error) {
            return next(error);
        }
    },

    show: async (req, res, next) => {
        try {
            const product = await Product.getById(req.params.productId);
            return res.json(product);
        } catch(error) {    
            return next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const product = new Product({
                ...req.body 
            });
            await product.save();

            return res.status(201)
                .json(product.toPrimitiveValues());
        } catch(error) {
            return next(error);
        }
    }
}