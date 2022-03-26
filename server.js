const express = require('express')
// import sequelize connection
const connection = require('./config/connection.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

connection.sync()
// sync sequelize models to the database, then turn on the server
app.listen(process.env.PORT || 3000)
