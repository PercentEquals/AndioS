const { withEnzyme } = require('jest-expo-enzyme');

module.exports = {
  projects: [
    withEnzyme(require('jest-expo/ios/jest-preset')),
    withEnzyme(require('jest-expo/android/jest-preset')),
  ],
  collectCoverage: true,
  transformIgnorePatterns: [
    "*.config.js|node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
    "!**/jest.config.js"
  ],
  setupFiles: [
    "./tests/jest.setup.js"
  ]
};