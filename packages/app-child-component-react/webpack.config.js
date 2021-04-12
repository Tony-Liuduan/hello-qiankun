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
        globalObject: 'window',
        library: `${appName}-[name]`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_${appName}`,
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
        port: 5001,
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        historyApiFallback: false,
        hot: false,
        watchContentBase: false,
        liveReload: false,
        injectClient: false,
    }
};
