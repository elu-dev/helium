const server = (name, url, port, instance) => ({ name, url, port, instance })

module.exports = [
    server('front',   'http://localhost:8000', 8000, require('../services/front-server/front-server')),
    server('gateway', 'http://localhost:3000', 3000, require('../services/gateway/gateway')),
    server('img CDN', 'http://localhost:3001', 3001, require('../services/img-cdn/img-cdn')),
    // server('auth',    'http://localhost:3002', 3002, require('../services/auth/auth'))
]