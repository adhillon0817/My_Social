const { Schema, model } = require('mongoose');
const moment = require('moment');


const UserSchema = new Schema({
    username:{
        type: String,
        unique: false,
        required: true,
        trim: true
    },

    email: {
        type: String,
        unique: false,
        required: true,
        trim: true
    },

    thoughts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts',
        },
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
},
{
    toJSON: { virtuals: true, getters: true },
},
);

    UserSchema.virtual('friendCount').get(function () {
        return `${this.friends.length}`;
    });
    
    const User = model ('User', UserSchema);

    
    module.exports = User;



