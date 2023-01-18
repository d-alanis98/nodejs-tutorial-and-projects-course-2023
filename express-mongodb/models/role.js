const { Schema, model } = require('mongoose');

const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    allowedActions: {
        type: Array,
        required: true,
        default: []
    }
});

module.exports = model('Role', roleSchema);