const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        requried: true,
        trim: true 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    freinds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true 
        },
        id: false 
    }
);

UserSchema.virtual('friendCoutn').get(function() {
    return this.freinds.length;
});

const User = model('User', UserSchema);

module.exports = User;