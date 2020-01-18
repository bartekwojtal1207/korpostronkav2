// const path = require("path");
// const webpack = require("webpack");
// const MediaQueryPlugin = require('media-query-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// module.exports = {
//     entry: ["./src/app.js"],
//     output: {
//         path: path.join(__dirname, './dist'),
//         // filename: 'index.js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /(node_modules|bower_components)/,
//                 loader: "babel-loader",
//                 options: {presets: ["@babel/env"]}
//             }
//             // {
//             //     test: /\.css$/i,
//             //     use: [
//             //         MiniCssExtractPlugin.loader,
//             //         'css-loader',
//             //         // MediaQueryPlugin.loader,
//             //         // 'postcss-loader',
//             //         // 'sass-loader'
//             //     ],
//             // },
//             // {
// //               test: /\.scss$/i,
// //                 use: [
// //                     MiniCssExtractPlugin.loader,
// //                     'css-loader',
// //                     // 'postcss-loader',
// //                     MediaQueryPlugin.loader,
// //                     'sass-loader',
// //                 ],
// //             },
// //         ],
// //     },
// //     plugins: [
// //         new MiniCssExtractPlugin({
// //             // Options similar to the same options in webpackOptions.output
// //             // // both options are optional
// //             // filename: '[name].css',
// //             // chunkFilename: '[id].css',
// //         }),
//     ],
// }}
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ["./src/js/index.js"],
    // resolve: {
    //     extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    // },
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
            }
        ]
    }
};
