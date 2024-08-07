const {Schema, model} = require('mongoose')
const reactionSchema= require('./reaction')
const dateFormat = require('../utils/dateFormat')


const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp =>  dateFormat(timestamp),

        },

        userName: {
            type: String, 
            required: true,
    
        },

        reactions: [
            reactionSchema
        ]
    },
    {
        toJSON:{
            getters: true
        },
        id: false 
    },

)
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length 
})

const Thought = model('Thought', thoughtSchema)
module.exports = Thought


