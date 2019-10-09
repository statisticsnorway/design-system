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
			'@atoms': path.resolve(__dirname, '../src/atoms/'),
			'@molecules': path.resolve(__dirname, '../src/molecules/'),
			'@organisms': path.resolve(__dirname, '../src/organisms/'),
			'@pages': path.resolve(__dirname, '../src/pages/'),
			'@templates': path.resolve(__dirname, '../src/templates/'),
			'@public': path.resolve(__dirname, '..', 'public'),
		},
		extensions: ['.jsx', '.js'],
	},
};
