module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'transform-inline-environment-variables',
      {
        include: [
          // In development, NODE_ENV will be development. In CI
          // builds headed for testing, NODE_ENV will be test
          // and in production, of course, it will be production
          'NODE_ENV',
        ],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
