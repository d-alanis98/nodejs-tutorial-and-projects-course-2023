const Router = require('express').Router;
// Data
const products = require('../data/products');

const router = Router();

router.get('/v1', (req, res) => {
    return res.json(products);
});

router.get('/v1/query', (req, res) => {
    let { search, limit } = req.query;
    let resultProducts = products;
    if (search)
        resultProducts = products.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));

    if (limit !== undefined)
        resultProducts = resultProducts.slice(0, Number.parseInt(limit));

    if (resultProducts.length === 0)
        return res.status(404).send('No products matched your search');

    return res.json(resultProducts);
});

module.exports = router;