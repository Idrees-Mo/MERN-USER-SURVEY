require('dotenv').config({ path: "./config.env" })
const express = require("express")
const cors = require('cors')
const path = require('path')

const app = express()
const connectDB = require("./config/db")
connectDB()

app.use(cors())
app.use(express.json())
app.use("/user", require("./routes/user"))

// server static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))