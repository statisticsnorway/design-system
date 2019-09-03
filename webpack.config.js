const webpack = require('webpack');
const path = require('path');
const sass = require('sass');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const babelConf = path.resolve(__dirname, 'babel.config.js');
const stylelint = './.stylelintrc';

module.exports = {
	entry: ['@babel/polyfill', './src/index.jsx'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	resolve: {
		alias: {
			'@atoms': path.resolve(__dirname, 'src/atoms/'),
			'@organisms': path.resolve(__dirname, 'src/organisms/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@templates': path.resolve(__dirname, 'src/templates/'),
		},
		extensions: ['.jsx', '.js'],
	},
	devServer: {
		inline: true,
		contentBase: path.resolve(__dirname, 'build'),
		historyApiFallback: true,
		watchContentBase: true,
		port: 3000,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, '/tests/'],
				use: [
					{
						loader: 'babel-loader',
						options: {
							configFile: babelConf,
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: sass,
						},
					},
				],
			},
		],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					ecma: 6,
				},
			}),
		],
	},
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'}),
		// new StyleLintPlugin(stylelint),
	],
	devtool: 'cheap-module-eval-source-map',
};

exports.aliases = {
	'@atoms': path.resolve(__dirname, 'src/atoms/'),
	'@organisms': path.resolve(__dirname, 'src/organisms/'),
	'@pages': path.resolve(__dirname, 'src/pages/'),
	'@templates': path.resolve(__dirname, 'src/templates/'),
};
