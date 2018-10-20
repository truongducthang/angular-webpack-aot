const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin
const CompressionPlugin = require('compression-webpack-plugin')
const abs = require('./helpers')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
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

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                extractComments:true,
                sourceMap: false // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
			template: './src/index.html'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        new AngularCompilerPlugin({
            tsConfigPath: abs('./tsconfig.json'),
            entryModule: abs('./src/ts/app/app.module#AppModule'),
            mainPath: abs('./src/ts/main.ts')
        }),
        new CompressionPlugin({
            test: /\.js$|\.css$/
        })
    ],

    resolve: {
		extensions: [ '.tsx', '.ts', '.js','scss', 'css', 'woff', 'woff2', 'ttf', 'otf', 'eot' ],
		// important, allow angular esm2015 modules to be used, help tree shaking to work.
        mainFields: ['esm2015', 'browser', 'module', 'main']
	}
});