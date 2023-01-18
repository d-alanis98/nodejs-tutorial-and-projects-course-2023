// App
const { register } = require('./app');
// Routes
const adminRoutes = require('./routes/admin');
// Database
const { mongoConnect } = require('./database/mongodb');

// Constants
const PORT = process.env.PORT ?? 9000;

const app = register(app => {
    app.use('/admin', adminRoutes);
});

// Connect to MongoDB and start listening on the specified PORT
mongoConnect()
    .then(() => {
        app.listen(PORT, () => console.log(`Server listening on http://localhost:${ PORT }`));
    });