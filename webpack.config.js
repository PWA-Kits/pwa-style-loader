const webpackConfig = require("@salesforce/pwa-kit-dev/configs/webpack/config"); // eslint-disable-line

// Add or update the rule for CSS processing
webpackConfig.forEach((config) => {
  if (config.module && config.module.rules) {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });
  } else {
    config.module = {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    };
  }
});

module.exports = webpackConfig;
