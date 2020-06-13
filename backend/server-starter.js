const gateway = require('./services/gateway/gateway')
const front = require('./services/front-server/front-server')
const img_cdn = require('./services/img-cdn/img-cdn')

let log = (name, port) => console.log(`${name} started on port ${port}`)

front.listen(8000, _ => log('front', 8000))
gateway.listen(3000, _ => log('gateway', 3000))
img_cdn.listen(3001, _ => log('img CDN', 3001))