const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = require('metro-config').getDefaultConfig(__dirname);
module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'tsx', 'ts'], // Adicione qualquer extensão de código-fonte que seu projeto usa
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
