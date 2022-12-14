const { Schema, Types } = require('mongoose');

//WHEN ADDING A REACTION you need "reactionBody", "username", and "createdAt"
//reaction schema only
const reactionSchema = new Schema(
    {
        reactionId : {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        username: 
        {
            type: String,
            required: true
        },
        createdAt: 
        {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MM/DD/YYYY [at] hh:mm a')
        },
    },

    {
        toJSON: {getters: true,}
    }
);


module.exports = reactionSchema;