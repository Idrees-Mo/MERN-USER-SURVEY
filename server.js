require('dotenv').config({ path: "./config.env" })
const express = require("express")
const cors = require('cors')

const app = express()
const connectDB = require("./config/db")
connectDB()

app.use(cors())
app.use(express.json())
app.use("/user", require("./routes/user"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))