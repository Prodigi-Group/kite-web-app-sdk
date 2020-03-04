import {
    CommonModule,
} from '@angular/common';
import { NgModule } from '@angular/core';
import {
    FormsModule,
} from '@angular/forms';

import {
    LaunchWithItemsComponent,
} from './launch-with-items.component';

import {
    BaseWebSdkFormModule,
} from './../../molecules/index';

@NgModule({
    declarations: [
        LaunchWithItemsComponent,
    ],
    exports: [
        LaunchWithItemsComponent,
    ],
    imports: [
        BaseWebSdkFormModule,
        CommonModule,
        FormsModule,
    ],
})
export class LaunchWithItemsModule { }
