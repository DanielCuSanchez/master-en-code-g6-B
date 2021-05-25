const path = require("path");

// ./configs

//path.join(__dirname, "")

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist"),
  },
  mode: "production",
};
