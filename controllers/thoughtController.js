const {User, Thought} = require('../models')


const thoughtController = {
    async getAllThoughts(req, res) {
        try {
            const allThoughts = await Thought.find().select('-__v')
            res.status(200).json(allThoughts)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async getOneThought(req,res) {
        try {
            const singleThought = await Thought.findOne({_id:req.params.thoughtId}).select('-__v')
            res.status(200).json(singleThought)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body)
            res.status(200).json(newThought)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async updateThought(req, res) {
        try {
            const update = await Thought.findOneAndUpdate(
                {_id:req.params.thoughtId},
                {$set:req.body},
                {runValidators:true, new:true}
            )
            res.status(200).json(update)
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async deleteThought(req, res) {
        try {
            const deleteMessage = await Thought.findOneAndDelete(
                {_id:req.params.thoughtId},
        
            )
            await User.findOneAndUpdate({thoughts:req.params.thoughtId},
                {
                    $pull:{thoughts:req.params.thoughtId}
                },
                {new:true})
            res.status(200).json(deleteMessage)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async addReaction(req, res) {
        try {
            const addReact = await Thought.findOneAndUpdate(
                {_id:req.params.thoughtId},
                {$addToSet:{reactions:req.body}},
                {new:true},
                )
                res.status(200).json(addReact)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async removeReaction(req, res) {
        try {
            const deleteReact = await Thought.findOneAndUpdate(
                {_id:req.params.thoughtId},
                {$pull:{reactions:{reactionId:req.params.reactionId}}},
                {new:true},
                )
                res.status(200).json(deleteReact)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
}
module.exports =thoughtController