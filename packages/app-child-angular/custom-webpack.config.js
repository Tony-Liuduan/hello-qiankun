const appName = require('./package.json').name;
const path = require('path');

console.log(path.resolve('src/assets'));
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
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    preprocessor: async (content, loaderContext) => {
                        console.log('preprocessor================================', content, loaderContext);
                        let result;

                        try {
                            result = await Handlebars.compile(content)({
                                firstname: 'Value',
                                lastname: 'OtherValue',
                            });
                        } catch (error) {
                            await loaderContext.emitError(error);

                            return content;
                        }

                        return result;
                    },
                },
            },
            // {
            //     test: /\.html$/,
            //     loaders: [
            //         "html?" + JSON.stringify({
            //             attrs: ["img:src", "img:ng-src"]
            //         })
            //     ]
            // },
            // {
            //     test: /\.(png|jpe?g|gif|webp)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 publicPath: 'http://localhost:3004/assets',
            //             },
            //         },
            //     ],
            // },
            // {
            //     test: /\.(?:jpg|png|gif)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 819233,
            //                 fallback: {
            //                     loader: 'file-loader',
            //                     options: {
            //                         // name: 'assets/[name].[hash:8].[ext]',
            //                         publicPath: '//localhost:3004/',
            //                     },
            //                 },
            //             }
            //         }
            //     ]
            // }
        ],
    },
};

// module.exports = commonConfig;

const { merge } = require('webpack-merge');

module.exports = cliConfig => {
    const config = merge(cliConfig, commonConfig);
    // config.module.rules[0].options.name = 'assets/[name].[ext]';
    // config.module.rules[0].options.publicPath = 'http://localhost:3004/';
    config.module.rules[0].options.outputPath = 'assets';
    // config.module.rules[0].options.useRelativePath = true;
    // console.log(config.module.rules[0]);


    // console.log(config.module.rules);
    return config;
};