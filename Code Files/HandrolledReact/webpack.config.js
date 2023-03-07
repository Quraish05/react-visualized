const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
  },

  entry: "./src/functionComponent.js",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-react", { "runtime": "classic" }],
            "@babel/preset-env",
          ],
          //@package name suggests that preset-react is a
          //package under babel category
        },
      },
    ],
  },
  mode: "development",
};
