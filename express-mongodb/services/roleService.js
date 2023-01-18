// Model
const Role = require('../models/role');
// Utils
const { ResponseError } = require('../utils/errors');

const findRoleOrFail = async (roleId, req) => {
    const role = await Role.findById(roleId);
    if(!role)
        throw new ResponseError({
            statusCode: 404,
            statusMessage: `Role ${ roleId } not found`,
            requestData: req
        });
    return role;
}

module.exports = {
    findRoleOrFail
}