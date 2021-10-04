const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const productionMode = "production";

let mode = "development";

if (process.env === productionMode) {
  mode = productionMode;
}

module.exports = {
  mode,
  devtool: "source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    assetModuleFilename: "assets/[hash][ext][query]",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  devServer: {
    static: ["./dist"],
    hot: true,
  },
  plugins: [
    new MiniCSSExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCSSExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
