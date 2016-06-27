var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var webpack = require('webpack');

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: {
        main: PATHS.app + '/main',
        hello: PATHS.app + '/hello'
    },
    output: {
        path: PATHS.build,
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.js?$/, include: PATHS.app, loader: "babel-loader", query: { presets: ['es2015', 'react']} }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        progress: true,
        historyApiFallback: true,
        stats: 'errors-only',
        port: process.env.PORT,
        host: process.env.HOST
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};