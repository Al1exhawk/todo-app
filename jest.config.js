module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/__mocks__/staticAssetsStub.js',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@utils(.*)$': '<rootDir>/src/utils/$1',
        '^@assets(.*)$': '<rootDir>/src/assets/$1',
        '^@store(.*)$': '<rootDir>/src/store/$1',
    },
};
