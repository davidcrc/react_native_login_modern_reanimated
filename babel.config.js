module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // This has to be mirrored in tsconfig.json
          '^@/(.+)': './src/\\1',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
