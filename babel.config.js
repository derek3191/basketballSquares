module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      '@babel/typescript',
      'babel-preset-expo'
    ],
  };
};
