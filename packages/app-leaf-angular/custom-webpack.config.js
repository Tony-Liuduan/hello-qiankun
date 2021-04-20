const appName = require('./package.json').name;
module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        historyApiFallback: false,
    },
    output: {
        library: `${appName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${appName}`,
        globalObject: 'window',
    },
};