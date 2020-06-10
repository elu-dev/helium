const express = require('express')
const request = require('request')
const atlas = require('../../shared/atlas')


const forward = (req, res) => {
    console.log(req.url)
    // req.pipe(request({ url: servers[current_server].address + req.url })).pipe(res)
}

const app = express().get('*', forward).post('*', forward)

app.use((err,req,res,next) => { res.status = err.status || 500 })

module.exports = app
