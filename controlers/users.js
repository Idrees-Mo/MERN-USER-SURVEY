const User = require('../models/User')

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (error) {
    console.log(error.message)
  }
}
exports.getUser = (req, res, next) => {
  res.send("single user with id")
}

// creates a new user and adds in the data base
exports.createUser = async (req, res, next) => {
  const { firstName, lastName, email, location, profession, skills } = req.body
  try {
    const user = await User.create({
      firstName, lastName, email, location, profession, skills
    })
    res.status(201).json(user)
  } catch (error) {
    console.log(error.message)
  }
}

exports.removeUser = (req, res, next) => {
  res.send("user deleted")
}