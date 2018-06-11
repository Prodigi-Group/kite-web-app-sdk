import {
    CommonModule,
} from '@angular/common';
import { NgModule } from '@angular/core';
import {
    FormsModule,
} from '@angular/forms';
import 'reflect-metadata';
import 'zone.js';

import {
    LaunchWithItemsComponent,
} from './launch-with-items.component';

@NgModule({
    declarations: [
        LaunchWithItemsComponent,
    ],
    exports: [
        LaunchWithItemsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
})
export class LaunchWithItemsModule { }
