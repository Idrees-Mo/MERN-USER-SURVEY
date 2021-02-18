const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profession: {
    type: String,
    required: true
  },
  ageGroup: {
    type: String,
    required: true

  },
  skills: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", userSchema)

module.exports = User