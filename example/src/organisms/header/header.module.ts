import { NgModule } from '@angular/core';
import 'reflect-metadata';
import 'zone.js';

import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ],
})
export class HeaderModule { }
