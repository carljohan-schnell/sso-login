module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel'
    ],
    plugins: [
      // 🚨 Make sure to list react-native-reanimated/plugin last! 🚨
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin'
    ]
  };
};