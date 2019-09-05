
module.exports = {
	collectCoverageFrom: [
		'src/**/*.jsx',
		'!<rootDir>/src/index.jsx',
		'!<rootDir>/src/**/*stories.jsx',
		'!<rootDir>/node_modules/',
		'!<rootDir>/path/to/dir/',
	],
	moduleFileExtensions: ['js', 'jsx'],
	moduleDirectories: [
		'.',
		'src',
		'node_modules',
	],
	moduleNameMapper: {
		'^@atoms(.*)$': '<rootDir>/src/scripts/atoms$1',
		'^@molecules(.*)$': '<rootDir>/src/molecules/$1',
		'^@organisms(.*)$': '<rootDir>/src/scripts/organisms/$1',
		'^@pages(.*)$': '<rootDir>/src/scripts/pages/$1',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/fileMock.js',
		'\\.(css|scss)$': '<rootDir>/config/jest/styleMock.js',
	},
};
