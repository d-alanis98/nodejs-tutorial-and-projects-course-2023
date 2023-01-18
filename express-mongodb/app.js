const express = require('express');
// Custom middlewares
const errorHandler = require('../express/middleware/errorHandler');
const endpointNotFound = require('./middleware/notFound');
// Routes
const adminRoutes = require('./routes/admin');
// Database
const { mongoConnect } = require('./database/mongodb');

// Constants
const PORT = process.env.PORT ?? 9000;

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/admin', adminRoutes);

// Default route (404)
app.all('*', endpointNotFound);

// Error handling
app.use(errorHandler);

// Connect to MongoDB and start listening on the specified PORT
mongoConnect()
    .then(() => {
        app.listen(PORT, () => console.log(`Server listening on http://localhost:${ PORT }`));
    });