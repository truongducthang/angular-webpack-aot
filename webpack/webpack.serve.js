var webpackMerge = require('webpack-merge');
var webpackConfig = require('./webpack.dev.js');

module.exports = webpackMerge(webpackConfig, {
	serve: {
		hot : {
			port: 9081
		},
		port: 3000,
		open:true

	}
});