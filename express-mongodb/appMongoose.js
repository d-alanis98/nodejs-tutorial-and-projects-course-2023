// App
const { register } = require('./app');
// Routes
const mongooseRoutes = require('./routes/mongoose');
// Database
const connnection = require('./database/mongoose');

// Constants
const PORT = process.env.PORT ?? 3000;

const app = register(app => {
    app.use('/mongoose', mongooseRoutes);
});

console.log('hi')

// Connect to MongoDB and start listening on the specified PORT
connnection
    .then(() => {
        console.log('Hi')
        app.listen(PORT, () => console.log(`Server listening on http://localhost:${ PORT }`));
    });