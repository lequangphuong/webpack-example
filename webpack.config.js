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
            { test: /\.js?$/, include: PATHS.app, loader: "babel-loader", query: { presets: ['es2015', 'react']} },

            { test: /\.(jpg|jpe?g|gif|png)$/, exclude: /node_modules/, loader:'url-loader?limit=5000&name=images/img-[hash:6].[ext]' },

            { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
            { test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
            { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
            { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' }
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
        new ExtractTextPlugin("[name].css"),
        //new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        unused: true,
        //        dead_code: true,
        //        warnings: false
        //    }
        //})
    ]
};