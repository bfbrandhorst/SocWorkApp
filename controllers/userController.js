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
            const createUser = await User.create(req.body)
            res.status(200).json(createUser)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async updateUser(req, res) {
        try {
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async deleteUser(req, res) {
        try {
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async addFriend(req, res) {
        try {
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async removeFriend(req, res) {
        try {
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },


}
module.exports = userController