const Role = require('../models/role');

module.exports = {
    get: async (req, res, next) => {
        try {   
            const roles = await Role.find();
            return res.json(roles);
        } catch(error) {
            return next(error);
        }
    },
    
    create: async (req, res, next) => {
        try {
            const role = new Role(req.body);
            const createdRole = await role.save();
            return res.status(201)
                .json(createdRole.toJSON());
        } catch(error) {
            return next(error);
        }
    }
}