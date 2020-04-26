const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = {
  preset: '@testing-library/react-native',
  setupFiles: [...jestPreset.setupFiles, './jest.setup.js']
};
