module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        cwd: 'babelrc',
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@app': './src/App',
          '@api': './src/API',
          '@assets': './src/Assets',
          '@config': './src/Config',
          '@constants': './src/Constants',
          '@utils': './src/Utils',
          '@rrematch': './src/Rematch',
          '@components': './src/Components',
          '@screens': './src/Screens',
          '@interfaces': './src/Interfaces',
          '@navigators': './src/Navigators',
          '@helpers': './src/Helpers',
          '@themes': './src/Themes',
        },
      },
    ],
    'jest-hoist',
  ],
};
