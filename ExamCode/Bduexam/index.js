const express = require('express')
require('dotenv').config()
require("./config/db.js")
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const port = 3003
app.use(bodyParser.json())
app.use(cors())
const router = require("./router/router.js")
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use("/", router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})