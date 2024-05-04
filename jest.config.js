module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
    '!**/node_modules/**', 
    '!src/index.ts'
  ],
  testMatch: [
    '**/__tests__/**/*.test.ts', // Pattern for test files
  ],
};
