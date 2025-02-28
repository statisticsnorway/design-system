const { merge } = require('webpack-merge');
const path = require('path');
const sass = require('sass');
const base = require('./base.config');

const babelConf = path.resolve(__dirname, '../babel.config.js');

module.exports = merge(base, {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../build'),
		publicPath: '/',
	},
	devServer: {
		devMiddleware: {
			publicPath: '/',
		},
		static: {
			directory: path.resolve(__dirname, '../build'),
			watch: true,
		},
		historyApiFallback: true,
		port: 3070,
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
				test: /\.(s*)css$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: sass,
							sassOptions: {
								// Silence future deprecation warnings for bootstrap from dart sass
								silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls'],
							},
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
		],
	},
});
