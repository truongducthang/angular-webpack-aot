var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const abs = require('../helpers')

module.exports = {
	entry: {
		style: abs('./src/scss/style.scss')
	},
	module: {
		rules: [
			/* Optional rules to manage more assets types
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loaders: ['file-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loaders: ['file-loader']
			},
			*/
			{
				test: /\.html$/,
        		loader: 'html-loader'
			},
			{
				test:/\.(scss|css)$/,
				use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'sass-loader' ]
                })
            }
		]
	},

	plugins: [
		new ExtractTextPlugin({
            filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
            template: './src/index.html'
        })
	],

	optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

	resolve: {
		extensions: [ '.tsx', '.ts', '.js','scss', 'css', 'woff', 'woff2', 'ttf', 'otf', 'eot' ]
	}
}