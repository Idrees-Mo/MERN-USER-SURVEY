exports.getUsers = (req, res, next) => {
  res.send('all users')
}
exports.getUser = (req, res, next) => {
  res.send("single user with id")
}
exports.addUser = (req, res, next) => {
  res.send("the user added the database")
}
exports.removeUser = (req, res, next) => {
  res.send("user deleted")
}