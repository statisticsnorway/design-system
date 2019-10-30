const path = require('path');
const sass = require('sass');

module.exports = {
	module: {
		rules: [{
			include: path.resolve(__dirname, '../'),
			test: /\.(s*)css$/i,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						implementation: sass,
					},
				},
			],
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader',
			],
		}],
	},

	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../src/components/'),
			'@molecules': path.resolve(__dirname, '../src/molecules/'),
			'@pages': path.resolve(__dirname, '../src/pages/'),
			'@templates': path.resolve(__dirname, '../src/templates/'),
			'@public': path.resolve(__dirname, '..', 'public'),
		},
		extensions: ['.jsx', '.js'],
	},
};
