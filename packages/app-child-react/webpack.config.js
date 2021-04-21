const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const appName = require('./package.json').name;

module.exports = {
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        library: `${appName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${appName}`,
        globalObject: 'window',
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve('src'),
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, './tsconfig.json')
                }
            },
            {
                test: /\.css?$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.(?:jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new WebpackBuildNotifierPlugin({
            title: 'Webpack Build Over',
            suppressSuccess: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 3002,
        open: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        historyApiFallback: false,
        hot: true,
        disableHostCheck: true,
        host: "0.0.0.0",
    }
};
