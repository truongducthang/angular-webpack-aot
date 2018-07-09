const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const abs = require("path")

module.exports = webpackMerge(commonConfig, {
    mode: 'development',

    devtool: "cheap-module-eval-source-map",

    entry: {
        main: abs('./src/ts/main-dev.ts')
    },

    output: {
        path: abs(__dirname, "./dist"), // this path doesn't have any effect since in dev, we serve from memory (webpack-serve)
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].[name].chunk.js'
    },

    module: {
        rules: [
            {
				test: /\.ts$/,
                loaders: [
                    'angular2-template-loader',
                    'awesome-typescript-loader',
                    'angular-router-loader?loader=import&genDir=compiled&debug=true'
                ],
				exclude: /node_modules/
            }
        ]
    }
});