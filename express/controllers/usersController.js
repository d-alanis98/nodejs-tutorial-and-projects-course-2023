// Database
const db = require('../database/connection');
// Model
const User = require('../models/user');
// Utils
const ResponseError = require('../utils/errors').ResponseError;

module.exports = {
    get: async (req, res) => {
        try {
            const [users] = await db.execute('SELECT * from Users');
            return res.json(users);
        } catch (error) {
            return res.status(error.statusCode ?? 400).send(error.message);
        }
    },

    show: async (req, res, next) => {
        let { id } = req.params;
        if (isNaN(id) || !Number.isInteger(Number(id)))
            return next(new ResponseError({
                statusCode: 422,
                requestData: req,
                statusMessage: `Invalid id [${id}], value must be an integer`
            }));

        const [user] = await db.execute(`SELECT * from Users WHERE id = ${id}`);
        if (user.length === 0)
            return next(new ResponseError({
                statusCode: 404,
                statusMessage: 'User not found',
                requestData: req
            }));
        return res.json(user[0]);
    },

    create: async (req, res, next) => {
        try {
            const { name, email, dateOfBirth } = req.body;
            const user = new User({
                name, email, dateOfBirth
            });
            await user.save(db);
            res.status(201)
                .send(`Created user ${ name }`);
        } catch(error) {
            next(error);
        }
    }
}