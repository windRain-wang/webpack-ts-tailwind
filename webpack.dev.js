const { merge } = require("webpack-merge");
const config = require("./webpack.common.js");

module.exports = merge(config, {
  output: {
    pathinfo: false,
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    symlinks: false,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  stats: "summary",
});
