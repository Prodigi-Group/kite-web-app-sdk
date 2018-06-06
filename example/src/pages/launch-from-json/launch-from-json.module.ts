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
    LaunchFromJsonComponent,
} from './launch-from-json.component';

@NgModule({
    declarations: [
        LaunchFromJsonComponent,
    ],
    exports: [
        LaunchFromJsonComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
})
export class LaunchFromJsonModule { }
