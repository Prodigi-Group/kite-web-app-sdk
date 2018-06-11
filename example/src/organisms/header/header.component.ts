import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'header-component',
    styleUrls: [
        './header.component.scss',
    ],
    templateUrl: './header.component.template.pug',
})
export class HeaderComponent {}
