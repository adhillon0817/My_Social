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

    

})
