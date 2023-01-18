const express = require('express');
// Custom middlewares
const errorHandler = require('../express/middleware/errorHandler');
const endpointNotFound = require('./middleware/notFound');


const register = registerRoutes => {
    const app = express();

    // Middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Routes
    registerRoutes(app);

    // Default route (404)
    app.all('*', endpointNotFound);

    // Error handling
    app.use(errorHandler);

    return app;
}
 
module.exports = { register };