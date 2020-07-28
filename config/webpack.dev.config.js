"use strict";

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const helpers = require("./helpers");
const commonConfig = require("./webpack.common.config");
const environment = require("./env/dev.env");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const devWebpackConfig = merge(commonConfig, {
    devtool: "cheap-module-eval-source-map",
    output: {
        path: helpers.root("dist"),
        publicPath: "/",
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[id].chunk.js",
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new MiniCSSExtractPlugin({
            filename: "css/[name].bundle.css",
            chunkFilename: "css/[id].bundle.css",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin(),
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        overlay: true,
        port: 8000,
        stats: {
            normal: true,
        },
    },
});

module.exports = devWebpackConfig;
