module.exports = {
  images: {
    domains: ['courses-top.ru']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
      } 
    });
      return config;
  },
};