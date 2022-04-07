module.exports = function(api) {
  images: {
    disableStaticImages: true
  }
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], 
  };
};
