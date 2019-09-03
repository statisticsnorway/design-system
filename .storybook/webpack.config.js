const path = require('path');
const sass = require('sass');

module.exports = async ({ config, mode }) => {
	config.module.rules.push({
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
		include: path.resolve(__dirname, '../'),
	});

	return config;
};