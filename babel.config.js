module.exports = (api) => {
	api.cache(false);
	const presets = [
		'@babel/preset-react',
		['@babel/preset-env', {
			targets: {
				node: 'current',
			},
		}],
	];

	const env = {
		test: {
			plugins: [
				['@babel/plugin-transform-modules-commonjs', {}],
			],
		},
	};

	const plugins = [];

	return {
		presets,
		env,
		plugins,
	};
};
