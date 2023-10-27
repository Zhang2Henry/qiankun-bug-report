const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    port: 8081,
    allowedHosts: "all",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `sub-[name]`,
      libraryTarget: `umd`,
      chunkLoadingGlobal: `webpackJsonp_sub`,
    },
  },
});
