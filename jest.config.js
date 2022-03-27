const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

const paths = pathsToModuleNameMapper(compilerOptions.paths);
const tsPaths = Object.keys(paths).reduce((fullPaths, currentPathKey) => {
	return {
		...fullPaths,
		[currentPathKey]: `<rootDir>/src/${paths[currentPathKey]}`
	};
}, {});

module.exports = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		...tsPaths,
		'^.+\\.(css|scss)$': 'babel-jest'
	},
	setupFilesAfterEnv: [`<rootDir>/src/setupTests.ts`]
};
