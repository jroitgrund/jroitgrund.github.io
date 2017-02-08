const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV !== "production",
});

module.exports = {
    devtool: "inline-sourcemap",
    entry: {
        style: "./src/style.scss",
    },
    output: {
        filename: "ignored",
        path: path.join(__dirname, "build"),
    },
    resolve: {
        extensions: [".scss", ".js"]
    },
    devServer: {
        inline: true,
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: ["css-loader?sourceMap=true", "postcss-loader", "sass-loader?sourceMap=true"],
                    fallback: "style-loader"
                }),
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                "removeComments": true,
                "removeCommentsFromCDATA": true,
                "removeCDATASectionsFromCDATA": true,
                "collapseWhitespace": true,
                "conservativeCollapse": true,
                "removeAttributeQuotes": true,
                "useShortDoctype": true,
                "keepClosingSlash": true,
                "minifyJS": true,
                "minifyCSS": true,
                "removeScriptTypeAttributes": true,
                "removeStyleTypeAttributes": true,
            },
            template: 'src/index.html',
            chunks: ["style"],
        }),
        extractSass
    ],
};
