const Product = require('../models/product');
const { ResponseError } = require('../utils/errors');

module.exports = {

    get: async (req, res, next) => {
        try {
            return res.send(await req.user.getCart({
                include: {
                    association: 'products',
                }
            }));
        } catch(error) {
            return next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            // If the user already has a cart, we raise an error
            if(await req.user.getCart())
                throw new ResponseError({
                    statusCode: 422,
                    statusMessage: 'User already has an associated cart',
                    requestData: req
                });
            const cart = await req.user.createCart();
            return res.status(201).json(cart);
        } catch(error) {
            return next(error);
        }
    },

    addProduct: async (req, res, next) => {
        try {
            const cart = await req.user.getCart({ include: 'products' });
            if(!cart)
                throw new ResponseError({
                    statusCode: 422,
                    statusMessage: 'There is not cart associated to this user, please create a cart',
                    requestData: req,
                });
            const { productId } = req.body;
            let product = await cart.getProducts({ where: { id: productId } });
            let quantity = 1;

            if(product.length > 0)
                quantity = product[0].CartItem.quantity + 1;

            const productData = await Product.findByPk(productId);
            if(!productData)
                throw new ResponseError({
                    statusCode: 404,
                    statusMessage: 'Product not found',
                    requestData: req
                });
            await cart.addProduct(productData, { through: { quantity }});

            return res.status(201).json(cart);
        } catch(error) {    
            return next(error);
        }
    }
}