const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './frontend/index.js',
    output: {
        path: path.join(__dirname, 'frontend', 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
    
}