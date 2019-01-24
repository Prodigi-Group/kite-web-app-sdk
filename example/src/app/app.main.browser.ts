import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platformRef = platformBrowserDynamic();

function main() {
    return platformRef.bootstrapModule(AppModule)
        .catch((err) => {
            throw new Error(err);
        });
}

// support async tag or hmr
switch (document.readyState) {
    case 'interactive':
    case 'complete':
        main();
        break;
    case 'loading':
    default:
        document.addEventListener('DOMContentLoaded', () => main());
}
