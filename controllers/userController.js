const {User, Thought} = require('../models')


const userController = {

    async getAllUsers(req, res) {
        try {
            const allUsers = await User.find().select('-__v')
            res.status(200).json(allUsers)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async getOneUser(req, res) {
        try {
            const singleUser = await User.findOne({_id:req.params.userId}).select('-__v').populate('friends').populate('thoughts')
            res.status(200).json(singleUser)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body)
            res.status(200).json(newUser)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async updateUser(req, res) {
        try {
            const update = await User.findOneAndUpdate(
                {_id:req.params.userId},
                {$set:req.body},
                {runValidators:true, new:true}
            )
            res.status(200).json(update)
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async deleteUser(req, res) {
        try {
            const deleteDude = await User.findOneAndDelete(
                {_id:req.params.userId},
        
            )
            await Thought.deleteMany({_id:{$in:deleteDude.thoughts}})
            res.status(200).json(deleteDude)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async addFriend(req, res) {
        try {
            const addDude = await User.findOneAndUpdate(
                {_id:req.params.userId},
                {$addToSet:{friends:req.params.friendId}},
                {new:true},
                )
                res.status(200).json(addDude)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async removeFriend(req, res) {
        try {
            const deleteDude = await User.findOneAndUpdate(
                {_id:req.params.userId},
                {$pull:{friends:req.params.friendId}},
                {new:true},
                )
                res.status(200).json(deleteDude)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },


}
module.exports = userController