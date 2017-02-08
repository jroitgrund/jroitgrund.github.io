const config = Object.assign({}, require("./webpack.config.js"));

config.output.publicPath = "http://localhost:8080/"

module.exports = config;