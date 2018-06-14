#!/usr/bin/env node

const fs = require('fs');
const meow = require('meow');
const cheerio = require('cheerio');

const cli = meow(`
    Usage
    $ ./infra/scripts/update-docs-index <input>

    Examples
    $ ./infra/scripts/update-docs-index 4.1.2
`, {
    inputs: ['version'],
});
const [ version ] = cli.input;
const indexFile = 'docs/index.html';
console.log(`Adding version ${version} to ${indexFile}`);
const $ = cheerio.load(fs.readFileSync(indexFile));
console.log('Current file..', $.html());
$(`
            <li>
                <a href="${version}">Version ${version}</a>
                -
                <a href="https://github.com/OceanLabs/kite-web-app-sdk/tree/gh-pages/docs/${version}">Details</a>
            </li>
`).prependTo('#version-list');
const htmlResult = $.html();
console.log('Writing to file..', htmlResult);
fs.writeFileSync(indexFile, htmlResult);
