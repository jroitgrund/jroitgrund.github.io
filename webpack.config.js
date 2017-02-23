const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV !== "production",
});

const minify = {
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
}

module.exports = {
    bail: true,
    entry: {
        index: "./src/index.ts",
    },
    output: {
        filename: "[name].js",
        path: __dirname,
    },
    resolve: {
        extensions: [".scss", ".ts", ".js"]
    },
    devServer: {
        inline: true,
    },
    module: {
        loaders: [
            {
                test: /style\.scss$/,
                use: extractSass.extract({
                    use: ["css-loader?sourceMap=true", "postcss-loader", "sass-loader?sourceMap=true"],
                    fallback: "style-loader"
                }),
            },
            {
                test: /\.ts$/,
                use: ["ts-loader", "tslint-loader"]
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify,
            template: "src/index.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            minify,
            filename: "404/index.html",
            template: "src/404.html",
            chunks: ["index"],
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async'
        }),
        extractSass
    ],
};
