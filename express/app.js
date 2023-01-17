const express = require('express');
// Middlewares
const morgan = require('morgan');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
// Routes
const apiRoutes = require('./routes/api');
// Migrations
const runMigrations = require('./migrations/seed');

// Constants
const PORT = process.env.PORT ?? 8000;

const app = express();
// Set up middlewares
// Serve static content
app.use(express.static('./public'));
// Morgan (third-party middleware for logging)
app.use(morgan('tiny'));
// Parse form data
app.use(express.urlencoded({ extended: false }));
// Parse JSON
app.use(express.json());
// Error handler



// Configurations
app.set('view engine', 'pug');
app.set('views', 'views');



// Custom middlewares
// Apply logger middleware to API routes
app.use('/api/v1', logger, apiRoutes);

app.get('/pug', (req, res) => {
    let { name = 'John Doe', age = 24 } = req.query;
    return res.render('index.pug', { name, age });
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
});

app.use(errorHandler);


// Run db migrations - if required - and start listening for HTTP requests on the specified port
runMigrations(() => {
    app.listen(PORT, () => console.log(`Server listening on http://localhost:${ PORT }`));
});