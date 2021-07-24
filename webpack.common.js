const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const mode = process.env.NODE_ENV || "production";
module.exports = {
  context: __dirname,
  entry: "./src/index.ts",
  mode,
  output: {
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: "/node_modules",
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "更换主题(webpack + postcss + tailwindcss + var)",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  optimization: {
    runtimeChunk: "single",
  },
};
