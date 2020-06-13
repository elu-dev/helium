const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'db')))

// <img src="http://localhost:3001/img/EXINkyBX0AMiTke.jpg" alt="moon">

module.exports = app

