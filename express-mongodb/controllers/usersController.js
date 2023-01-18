// Model
const User = require('../models/user');
// Utils
const { ResponseError } = require('../utils/errors');

const findUserOrFail = async (userId, req) => {
    const user = await User.findById(userId);
    if(!user)
        throw new ResponseError({
            statusCode: 404,
            statusMessage: 'User not found',
            requestData: req
        });
    return user;
}

module.exports = {
    get: async (req, res, next) => {
        try {
            const users = await User.find();
            return res.json(users);
        } catch(error) {
            return next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const user = new User({
                ...req.body
            });
            const createdUser = await user.save();
            return res.status(201)
                .json(createdUser.toJSON());
        } catch(error) {
            return next(error);
        }
    },

    show: async (req, res, next) => {
        try {
            const user = await findUserOrFail(req.params.userId, req);
            return res.json(user.toJSON());
        } catch(error) {
            return next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const user = await findUserOrFail(req.params.userId, req);
            await user.update({
                ...req.body
            });
            console.log(updatedUser)
            return res.status(201)
                .json(user.toJSON());

        } catch(error) {
            return next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const user = await findUserOrFail(req.params.userId, req);
            await user.delete();
            return res.send('User deleted successfully');
        } catch(error) {
            return next(error);
        }
    }
}