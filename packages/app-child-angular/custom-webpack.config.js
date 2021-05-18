const appName = require('./package.json').name;
const path = require('path');

const commonConfig = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        historyApiFallback: false,
        disableHostCheck: true,
        host: "0.0.0.0",
    },
    output: {
        library: `${appName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${appName}`,
        globalObject: 'window',
    },
};

const { merge } = require('webpack-merge');
const { AngularCompilerPlugin } = require("@ngtools/webpack");

const ANGULAR_COMPILER_PLUGIN_OPTIONS = {
    directTemplateLoading: false
};

module.exports = cliConfig => {
    const config = merge(cliConfig, commonConfig);

    config.plugins = config.plugins ?? [];

    const acpIndex = config.plugins.findIndex(plugin => plugin instanceof AngularCompilerPlugin);
    if (acpIndex !== -1) {
        const acp = config.plugins[acpIndex];
        config.plugins.splice(acpIndex, 1, new AngularCompilerPlugin({ ...acp.options, ...ANGULAR_COMPILER_PLUGIN_OPTIONS }));
    } else {
        config.plugins.push(
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.app.json',
                ...ANGULAR_COMPILER_PLUGIN_OPTIONS,
            })
        );
    }

    config.module = {
        ...config.module,
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: path.resolve("./loader/html-src-loader.js"),
                    },
                    'raw-loader', // 加载文件原始内容（utf-8）
                ]
            },
            {
                test: /\.svg$/,
                use: ['raw-loader'],
            },
            ...config.module?.rules ?? [],
        ]
    };

    return config;
};
