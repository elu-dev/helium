const gateway = require('./services/gateway/gateway')
const front = require('./services/front-server/front-server')

let port = 3000
let log = name => console.log(`${name} started on port ${port++ - 2}`)

gateway.listen(port, _ => log('gateway')) ; port++
front.listen(port, _ => log('front')); port++