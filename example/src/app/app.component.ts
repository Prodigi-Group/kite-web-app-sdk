import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-component',
    styleUrls: [
        './../../styles/kite-web-app-sdk.scss',
        './app.component.scss',
    ],
    templateUrl: './app.component.template.pug',
})
export class AppComponent {}
