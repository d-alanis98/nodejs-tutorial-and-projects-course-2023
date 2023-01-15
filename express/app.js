const express = require('express');
// Middlewares
const logger = require('./middleware/logger');
const morgan = require('morgan');
// Routes
const apiRoutes = require('./routes/api');

// Constants
const PORT = process.env.PORT ?? 8000;

const app = express();
// Set up middlewares
// Serve static content
app.use(express.static('./public'));
// Morgan (third-party middleware for logging)
app.use(morgan('tiny'))
// Parse form data
app.use(express.urlencoded({ extended: false }))
// Parse JSON
app.use(express.json())

// Custom middlewares
// Apply logger middleware to API routes
app.use('/api', logger, apiRoutes);

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${ PORT }`));