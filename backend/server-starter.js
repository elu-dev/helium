require('dotenv').config() // init env variables

const atlas = require('./shared/atlas')

let log = (name, port) => console.log(`${name} started on port ${port}`)

for (let server of atlas)
    server.instance.listen(server.port, _ => log(server.name, server.port))
