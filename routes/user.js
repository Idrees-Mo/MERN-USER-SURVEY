const express = require("express")
const router = express.Router()

const { getUsers, getUser, createUser, removeUser } = require('../controlers/users')
router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.delete('/', removeUser)

module.exports = router