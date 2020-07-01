const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const queries = require('./queries')

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.post('/register', async (req, res) => {
    let { email, nickname, pwd } = req.body
    const qresult = await queries.registerUser(nickname, email, pwd)

    if (qresult.error) console.log(qresult.error)
    else res.sendStatus(qresult.status)
    
})

app.post('/login', (req,res) => {

    let { email, pwd } = req.body

    let hash; // get pwd from db

    if(bcrypt.compareSync(pwd, hash)) {
        // Passwords match
    } else {
        // Passwords don't match
    }

    if (logged) {
        jwt.sign({ user }, process.env.JWT_SALT, (err, token) => {
            if (err) res.send(err)
            else res.json({ token })
        })
    }
})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    
    if (typeof bearerHeader !== 'undefined') {
        
        // set the token
        const bearer = bearerHeader.split(' ')
        req.token = bearer[1]
        next()

    } else res.sendStatus(403) // forbidden
}


app.get('/user', verifyToken, (req,res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus('403') // forbidden
        } else {
            res.json({
                message: 'Post created...',
                authData
            })
        }
    })
})