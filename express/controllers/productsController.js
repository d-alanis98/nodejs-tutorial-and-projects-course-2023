// Data
const products = require('../data/products');

module.exports = {
    getAll: (req, res) => {
        return res.json(products);
    },

    getByQuery: (req, res) => {
        let { search, limit } = req.query;
        let resultProducts = products;
        if (search)
            resultProducts = products.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));

        if (limit !== undefined)
            resultProducts = resultProducts.slice(0, Number.parseInt(limit));

        if (resultProducts.length === 0)
            return res.status(404).send('No products matched your search');

        return res.json(resultProducts);
    }
}