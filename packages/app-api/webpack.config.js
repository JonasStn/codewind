const packageJson = require('../../package.json');
const { composePlugins, withNx } = require('@nx/webpack');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');

const basePackage = {
  name: 'app-api',
  version: packageJson.version,
  main: 'main.js',
  dependencies: {
    '@nestjs/platform-express':
      packageJson.dependencies['@nestjs/platform-express'],
  },
};

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.plugins.push(new GeneratePackageJsonPlugin(basePackage));
  return config;
});
