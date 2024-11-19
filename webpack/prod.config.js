const { merge } = require('webpack-merge');
const path = require('path');
const sass = require('sass');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const base = require('./base.config');

const babelConf = path.resolve(__dirname, '../babel.config.js');
console.log('Starting production build');

module.exports = merge(base, {
	mode: 'production',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../build'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, '/tests/', '/.storybook/', '/storybook-static/'],
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
				test: /\.(s*)css$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: sass,
							sassOptions: {
								quietDeps: true,
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							fallback: 'file-loader',
						},
					},
				],
			},
			{
				test: /\.svg/,
				use: {
					loader: 'svg-url-loader',
					options: {
						// limit: 10 * 1024,
						noquotes: true,
					},
				},
			},
		],
	},
	plugins: [
		new ESLintPlugin({ extensions: ['jsx'] }),
	],
	optimization: {
		nodeEnv: 'production',
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				extractComments: true,
			}),
		],
		splitChunks: {
			chunks: 'async',
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
});
