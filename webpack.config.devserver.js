const config = Object.assign({}, require("./webpack.config.js"));

config.output.publicPath = "http://localhost:8080/"
config.devtool = "inline-sourcemap",

module.exports = config;