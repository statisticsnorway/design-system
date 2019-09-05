const webpack = require('webpack');
const path = require('path');
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
	resolve: {
		alias: {
			'@atoms': path.resolve(__dirname, '../src/atoms/'),
			'@organisms': path.resolve(__dirname, '../src/organisms/'),
			'@pages': path.resolve(__dirname, '../src/pages/'),
			'@templates': path.resolve(__dirname, '../src/templates/'),
		},
		extensions: ['.jsx', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	],
};

exports.aliases = {
	'@atoms': path.resolve(__dirname, '../src/atoms/'),
	'@organisms': path.resolve(__dirname, '../src/organisms/'),
	'@pages': path.resolve(__dirname, '../src/pages/'),
	'@templates': path.resolve(__dirname, '../src/templates/'),
};
