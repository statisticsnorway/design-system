module.exports = api => {
	api.cache(false);

	const development = {
		presets: [
			'@babel/preset-react',
			['@babel/preset-env', {
				modules: false,
				targets: { node: 'current' },
			}],
		],
		plugins: [
			['@babel/plugin-transform-modules-commonjs', {}],
			['prismjs', {
				languages: ['javascript', 'html', 'css', 'jsx'],
				plugins: ['line-numbers'],
				theme: 'coy',
				css: true,
			}],
		],
	};

	const test = {
		presets: [
			'@babel/preset-react',
			['@babel/preset-env',
				{
					modules: 'commonjs',
					debug: false,
					targets: { node: 'current' },
				},
			],
		],
		plugins: [
			['@babel/plugin-transform-modules-commonjs', {}],
			'transform-es2015-modules-commonjs',
		],
	};

	const production = {
		presets: [
			'@babel/preset-react',
			['@babel/preset-env', { modules: false }],
		],
		plugins: [
			['prismjs', {
				languages: ['javascript', 'html', 'css', 'jsx'],
				plugins: ['line-numbers'],
				theme: 'coy',
				css: true,
			}],
		],
	};

	console.log(`Babel registered environment variable: ${process.env.ENV}`);

	if (process.env.ENV === 'development') {
		return development;
	}
	if (process.env.ENV === 'test') {
		return test;
	}
	if (process.env.ENV === 'production') {
		return production;
	}

	return development;
};
