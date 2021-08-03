module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!**/mocks/**',
    '!src/**/*.types.ts',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/mocks/.*'],
  coverageReporters: ['lcov', 'text-summary'],
  moduleNameMapper: {
    '@root(.*)': '<rootDir>$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@contexts/(.*)': '<rootDir>/src/contexts/$1',
    '@contextProviders/(.*)': '<rootDir>/src/contextProviders/$1',
    '@reducers/(.*)': '<rootDir>/src/reducers/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@layouts/(.*)': '<rootDir>/src/layouts/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@consts/(.*)': '<rootDir>/src/consts/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/fileMock.ts',
  },
};
