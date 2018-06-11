const packageJson = require('./package.json');
const appPathGenerator =
    require('@kite-tech/webpack/utils/app-path-generator');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    paths: {
        dir: {
            appBuild: appPathGenerator(`docs/${packageJson.version}`),
            appPublic: appPathGenerator('example/index.html'),
            appSrc: appPathGenerator('example/src'),
            appStyles: appPathGenerator('example/styles'),
        },
        files: {
            appHtml: appPathGenerator('example/index.html'),
            appIndexJs: appPathGenerator(
                `example/src/app/app.main.browser.ts`,
            ),
        },
    },
};
