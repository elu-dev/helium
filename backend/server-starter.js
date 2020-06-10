const gateway = require('./services/gateway/gateway')

let port = 3000
let log = name => console.log(`${name} started on port ${port++}`)

gateway.listen(port, _ => log('gateway'))