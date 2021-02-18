require('dotenv').config({ path: "./config.env" })
const express = require("express")

const app = express()

app.use(express.urlencoded())

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))