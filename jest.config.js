module.exports = {
	collectCoverageFrom: [
		'src/**/*.jsx',
		'!<rootDir>/src/index.jsx',
		'!<rootDir>/src/App.jsx',
		'!<rootDir>/src/**/*stories.jsx',
		'!<rootDir>/node_modules/',
		'!<rootDir>/path/to/dir/',
	],
	moduleDirectories: [
		'node_modules',
		'src/atoms',
		'src/molecules',
		'src/organisms',
		'src/pages',
	],
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		'^@atoms(.*)$': '<rootDir>/src/scripts/atoms$1',
		'^@molecules(.*)$': '<rootDir>/src/molecules$1',
		'^@organisms(.*)$': '<rootDir>/src/scripts/organisms$1',
		'^@pages(.*)$': '<rootDir>/src/scripts/pages$1',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/fileMock.js',
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	modulePaths: [
		'<rootDir>/src/scripts/atoms',
	],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFiles: ['<rootDir>/src/setupTests.js'],
	testMatch: ['**/*.test.jsx'],
	transform: { '^.+\\.jsx?$': 'babel-jest' },
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
