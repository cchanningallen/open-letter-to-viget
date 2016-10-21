var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'src/app.jsx',
  out: 'public',
  clearBeforeBuild: true,
  // Use devServer.proxy to specify proxies
  devServer: {
    proxy: {
      context: "/api",
      options: {
        target: "http://localhost:8080",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
});
