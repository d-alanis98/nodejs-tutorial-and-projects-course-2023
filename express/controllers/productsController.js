// Model
const Product = require('../models/product');
const { ResponseError } = require('../utils/errors');

module.exports = {
    get: async (req, res, next) => {
        try {
            const { search, limit } = req.query;
            const filters = { where: { } };
            if(search)
                filters.where.title = {
                    $like: `%${ search }%`
                };
            if(!isNaN(limit))
                filters.limit = Number.parseInt(limit);
            const products = await Product.findAll(filters);
            return res.json(products);
        } catch(error) {
            next(error);
        }
    },

    show: async (req, res, next) => {
        try {
            const { productId } = req.params;
            const product = await Product.findByPk(productId);
            if(!product)
                throw new ResponseError({
                    statusCode: 404,
                    statusMessage: 'Product not found',
                    requestData: req,
                });
            return res.json(product);
        } catch(error) {
            next(error);
        }
    },
    
    create: async (req, res, next) => {
        try {
            const { title, price, description } = req.body;
            const product = await Product.create({
                title,
                price,
                description
            });

            return res.status(201).json(product);
        } catch(error) {
            next(error);
        }
    }


}