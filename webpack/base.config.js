const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/index.jsx'],
	module: {
		// rules: [
		// 	{
		// 		test: /\.(woff|woff2|eot|ttf|otf)$/,
		// 		use: [
		// 			'file-loader',
		// 		],
		// 	},
		// ],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	],
};
