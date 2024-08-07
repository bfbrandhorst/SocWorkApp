const {Schema, Types} = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody:{
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

    
    },
   
    {
        toJSON:{
            getters: true
        },
        id: false 
    },

)

module.exports = reactionSchema