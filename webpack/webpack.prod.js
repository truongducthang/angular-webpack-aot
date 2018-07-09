const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin
const CompressionPlugin = require('compression-webpack-plugin')
const abs = require('../helpers')

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    //devtool: "sourcemap",
    output: {
        path: abs("./dist"),
        publicPath: '/',
        filename: '[name].[hash].js'
    },

    entry: {
        main: './src/ts/main.ts'
    },

    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: {
                    loader: '@ngtools/webpack'
                }
            }
        ]
    },
    
    plugins : [
        new AngularCompilerPlugin({
            tsConfigPath: abs('./tsconfig.json'),
            entryModule: abs('./src/ts/app/app.module#AppModule'),
            mainPath: abs('./src/ts/main.ts')
            //sourceMap: true
        }),
        new CompressionPlugin({
            test: /\.js$|\.css$/
        })
    ]
});