const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    unstable_enablePackageExports: false,
    sourceExts: [...defaultConfig.resolver.sourceExts, "cjs"],
  },
};
