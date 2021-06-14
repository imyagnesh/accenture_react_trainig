const path = require("path");
<<<<<<< HEAD

=======
>>>>>>> main
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
<<<<<<< HEAD

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),

    filename: "main.js",
  },

=======
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
>>>>>>> main
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
<<<<<<< HEAD

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",

=======
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
>>>>>>> main
      filename: "index.html",
    }),
  ],
};
