const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'Role',
    }]
});

module.exports = model('User', userSchema);