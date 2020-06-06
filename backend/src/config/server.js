const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors)

app.listen(port, () => {
  console.log(`Running on :${port}`)
})


module.exports = app
