const { merge } = require("webpack-merge");
const config = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
  const isAnalyzing = env.analyzer;
  return merge(config, {
    plugins: ((plugins) => {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[id].[contenthash].css",
        })
      );

      if (isAnalyzing) {
        plugins.push(new BundleAnalyzerPlugin());
      }

      return plugins;
    })([]),
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
      ],
    },
    optimization: {
      moduleIds: "deterministic",
      minimizer: [new CssMinimizerPlugin()],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  });
};
