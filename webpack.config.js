var webpack = require('webpack');
var path = require('path');
var parentDir = path.join(__dirname, './');

module.exports = {
    entry: [
        path.join(__dirname, './index.js')
    ],
    module: {
        loaders: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    output: {
        path: parentDir,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}