const express = require("express")
const router = express.Router()

const { getUsers, getUser, addUser, removeUser } = require('../controlers/users')
router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', addUser)
router.delete('/', removeUser)

module.exports = router