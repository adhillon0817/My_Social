const { Schema, model } = require('mongoose');
const moment = require('moment');
const Reaction = require('./Reaction');
// WHEN ADDING A THOUGHT IN INSOMNIA "thoughtText" "createdAt" and "username"
//thoughtText createdAt username reactions
const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },

    createdAt: 
    {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MM/DD/YYYY [at] hh:mm a')
    },

    username: 
    {
        type: String,
        required: true
    },

    reactions: [Reaction],
},

{
    toJSON: { virtuals: true,}
   
}

);
//reactionCount to retrieve length of reactions array
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model ('Thought', thoughtSchema);

module.exports = Thought;