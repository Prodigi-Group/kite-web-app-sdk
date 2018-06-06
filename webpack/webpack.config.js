const webpack = require('webpack');
const paths = require('@kite-tech/webpack/utils/paths');
const appPathGenerator =
    require('@kite-tech/webpack/utils/app-path-generator');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = () => {
    return {
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [
                paths.dir.appSrc,
                paths.dir.appNodeModules,
            ],
        },

        entry: {
            app: [
                appPathGenerator('./index.ts'),
            ],
        },

        output: {
            filename: 'index.js',
            path: appPathGenerator('./dist'),
        },

        module: {
            strictExportPresence: true,
            rules: [{
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    configFile: 'tslint.json',
                },
                include: [paths.dir.appSrc],
            },
            {
                oneOf: [{
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                        },
                        {
                            loader: 'angular2-template-loader'
                        }
                    ],
                    exclude: /\.spec\.ts$/
                }],
            },
        ]},

        performance: {
            hints: false,
        },

        plugins: [
            new UglifyJsPlugin({
                beautify: false,
                output: {
                    comments: false,
                },
                mangle: {
                    screw_ie8: true,
                },
                compress: {
                    screw_ie8: true,
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                    negate_iife: false,
                },
            }),
        ]
    };
}
