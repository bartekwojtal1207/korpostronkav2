var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ["./src/js/index.js"],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {   test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ]
            },
        ]
    }
};
