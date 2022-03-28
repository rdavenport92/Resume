const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

module.exports = {
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/src'],
	modulePaths: ['<rootDir>/src'],
	moduleNameMapper: {
		...pathsToModuleNameMapper(compilerOptions.paths),
		'^.+\\.(css|scss)$': 'babel-jest'
	},
	setupFilesAfterEnv: [`<rootDir>/src/setupTests.ts`]
};
