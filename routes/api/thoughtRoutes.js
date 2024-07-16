const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../conrollers/thoughtController')


router.route('/').get(getAllThoughts).post(createThought)
router.route('/:userId').get(getOneThought).put(updateThought).delete(deleteThought)
router.route('/:userId')

module.exports = router;