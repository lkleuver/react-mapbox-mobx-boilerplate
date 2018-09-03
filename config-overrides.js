const path = require("path");
const rewireMobX = require("react-app-rewire-mobx");

module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  config.resolve = {
    alias: {
      "@style": path.resolve(__dirname, "src/style/"),
      "@store": path.resolve(__dirname, "src/store/"),
      "@hoc": path.resolve(__dirname, "src/hoc/"),
      "@services": path.resolve(__dirname, "src/services/")
    }
  };
  return config;
};
