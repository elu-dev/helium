require('dotenv').config()
const promisify = require('util').promisify
const pg = require('pg')
const bcrypt = require('bcrypt')

const pool = new pg.Pool({
    host:     process.env.DB_URL,
    port:     process.env.DB_PRT,
    database: process.env.DB_DB,
    user:     process.env.DB_USR,
    password: process.env.DB_PWD,
})

const query = promisify(pool.query).bind(pool);

async function getUser(name) {
    let pass = await query(`SELECT * FROM users WHERE nickname = '${name}'`)
    pool.end()
    return pass.rows
}

async function registerUser(name, email, pwd) {
    let qresult = await query(`SELECT password FROM users WHERE email = '${email}'`)
    
    if (qresult.rows.length) {
        pool.end()
        return {error:'user already registered'}
    }

    const salt = await bcrypt.genSalt()

    pwd = await bcrypt.hash(pwd, salt)

    qresult = await query(`INSERT INTO users VALUES('${name}', '${email}', '${pwd}', DEFAULT)`)

    
    if (qresult.rows.length) {
        console.log('AAAAAAAAAAAAAAAAAAA')
    }

    pool.end()
}

registerUser('paco', 'paco@paco.com', 'paco').then(console.log)

