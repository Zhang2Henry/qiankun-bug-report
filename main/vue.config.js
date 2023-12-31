const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      "/bi": {
        target: "http://127.0.0.1:8081",
        changeOrigin: true,
        pathRewrite: {
          "^/bi": "/",
        },
      },
    },
  },
});
