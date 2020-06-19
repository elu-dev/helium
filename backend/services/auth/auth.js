const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.post('/login', (req,res) => {
    
    let logged = false

    if (logged) {
        jwt.sign({ user }, 'secretkey', (err, token) => {
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