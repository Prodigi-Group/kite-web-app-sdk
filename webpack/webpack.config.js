const webpack = require('webpack');
const paths = require('@kite-tech/webpack/utils/paths');
const appPathGenerator =
    require('@kite-tech/webpack/utils/app-path-generator');

module.exports = () => {
    return {
        mode: 'production',

        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [
                paths.dir.appSrc,
                paths.dir.appNodeModules,
            ],
        },

        entry: appPathGenerator('./src/index.ts'),

        output: {
            filename: 'index.js',
            path: appPathGenerator('./dist'),
            library: 'KiteWebAppSdk',
            libraryTarget: 'umd'
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
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig-lib.json',
                    },
                },
                exclude: /\.spec\.ts$/
            },
        ]},

        performance: {
            hints: false,
        },
    };
}
