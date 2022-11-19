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
        }
    ]
})

    UserSchema.virtual('friendCount').get(function () {
        return this.reactions.length;
    });
    
    const User = model ('User', thoughtSchema);

    
    module.exports = User;



