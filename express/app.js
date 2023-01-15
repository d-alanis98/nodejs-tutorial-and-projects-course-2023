const express = require('express');
// Data
const products = require('./data/products');
// Middlewares
const logger = require('./middleware/logger');
const morgan = require('morgan');

// Constants
const PORT = process.env.PORT ?? 8000;

const app = express();
// Set up middlewares
app.use(express.static('./public'));
app.use(morgan('tiny'))
// Custom middlewares
// Apply logger middleware to API routes
app.use('/api', logger);


app.get('/api/v1', (req, res) => {
   return res.json(products);
});

app.get('/api/v1/query', (req, res) => {
    let { search, limit } = req.query;
    let resultProducts = products;
    if(search)
        resultProducts = products.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));

    if(limit !== undefined)
        resultProducts = resultProducts.slice(0, Number.parseInt(limit));
    
    if(resultProducts.length === 0)
        return res.status(404).send('No products matched your search');

    return res.json(resultProducts);
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${ PORT }`));