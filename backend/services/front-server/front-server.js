const express = require('express')
const path = require('path')

const app = express()

console.log('aaaaaaa' + path.join(__dirname, '../../../frontend/public/'))

app.use(express.static(path.join(__dirname, '../../../frontend/public/')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/public/index.html'))
})

module.exports = app
