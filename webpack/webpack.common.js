const glob = require('glob');
const abs = require('./helpers')
const PurifyCSSPlugin = require('purifycss-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		style: abs('./src/scss/style.scss')
	},
	
	module: {
		rules: [
			/* Optional rules to manage more assets types*/
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loaders: ['file-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loaders: ['file-loader']
			},
			
			{
				test: /\.html$/,
        		loader: 'html-loader'
			},
			{
				test:/\.(scss|css)$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader' ]
               
            }
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],

	optimization: {
        splitChunks: {
			chunks: 'all',
			cacheGroups: {
				angular: {
					test:/[\\/]node_modules[\\/]@angular[\\/]/,
					chunks:'all'
				}
			}
        }
    }
}