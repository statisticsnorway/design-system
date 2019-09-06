const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
	APP_DIR: path.resolve(__dirname, '..', 'src'),
};

module.exports = {
	entry: ['./src/index.jsx'],
	resolve: {
		alias: {
			'@atoms': path.resolve(paths.APP_DIR, 'atoms/'),
			'@molecules': path.resolve(paths.APP_DIR, 'molecules/'),
			'@organisms': path.resolve(paths.APP_DIR, 'organisms/'),
			'@pages': path.resolve(paths.APP_DIR, 'pages/'),
			'@templates': path.resolve(paths.APP_DIR, 'templates/'),
		},
		extensions: ['.jsx', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	],
};

exports.aliases = {
	'@atoms': path.resolve(paths.APP_DIR, 'atoms/'),
	'@molecules': path.resolve(paths.APP_DIR, 'molecules/'),
	'@organisms': path.resolve(paths.APP_DIR, 'organisms/'),
	'@pages': path.resolve(paths.APP_DIR, 'pages/'),
	'@templates': path.resolve(paths.APP_DIR, 'templates/'),
};
