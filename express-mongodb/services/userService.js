// Model
const User = require('../models/user');
// Utils
const { ResponseError } = require('../utils/errors');

module.exports = {
    findUserOrFail: async (userId, req) => {
        const user = await User.findById(userId);
        if(!user)
            throw new ResponseError({
                statusCode: 404,
                statusMessage: 'User not found',
                requestData: req
            });
        return user;
    }
}