var path = require('path')
var ENTRY_PATH = path.resolve(__dirname, './src/index.js')
var OUTPUT_PATH = path.resolve(__dirname, './build')

module.exports = {
    entry: ENTRY_PATH,
    output: {
        path: OUTPUT_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react']
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(jpg|png|jpeg)$/,
            loader: 'url?limit=50000'
        }]
    },
    devServer: {
        port: 8083
    }
}