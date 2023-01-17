// Utils
const { ResponseError } = require('../utils/errors');


const validateProductId = (productId, req) => {
    if(isNaN(productId))
        throw new ResponseError({
            statusCode: 422,
            statusMessage: 'Provided product ID is not valid, it must be integer',
            requestData: req
        });
}

const findProductById = async (productId, req) => {
    
    validateProductId(productId, req);

    const [product] = await req.user.getProducts({ 
        where: {
            id: Number.parseInt(productId)
        }
    });

    if(!product)
        throw new ResponseError({
            statusCode: 404,
            statusMessage: 'Product not found',
            requestData: req,
        });
    return product;
}

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
            const products = await req.user.getProducts(filters);
            return res.json(products);
        } catch(error) {
            next(error);
        }
    },

    show: async (req, res, next) => {
        try {
            const product = await findProductById(req.params.productId, req);
            return res.json(product);
        } catch(error) {
            next(error);
        }
    },
    
    create: async (req, res, next) => {
        try {
            const product = await req.user.createProduct(req.body);
            return res.status(201).json(product);
        } catch(error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const product = await findProductById(req.params.productId, req);
            const updatedProduct = await product.update(req.body);
            return res.json(updatedProduct);
        } catch(error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const product = await findProductById(req.params.productId, req);
            await product.destroy();
            res.send('Successfully deleted product');
        } catch(error) {    
            return next(error);
        }
    },


}