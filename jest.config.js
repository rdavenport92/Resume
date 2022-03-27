const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.json');

const paths = pathsToModuleNameMapper(compilerOptions.paths);
const tsPaths = Object.keys(paths).reduce((fullPaths, currentPathKey) => {
	return {
		...fullPaths,
		[currentPathKey]: `<rootDir>/${compilerOptions.baseUrl}/${paths[currentPathKey]}`
	};
}, {});

module.exports = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		...tsPaths,
		'^.+\\.(css|scss)$': 'babel-jest'
	},
	setupFilesAfterEnv: [`<rootDir>/${compilerOptions.baseUrl}/setupTests.ts`]
};
