import {
    CommonModule,
} from '@angular/common';
import { NgModule } from '@angular/core';
import {
    FormsModule,
} from '@angular/forms';

import {
    LaunchFromJsonComponent,
} from './launch-from-json.component';

import {
    BaseWebSdkFormModule,
} from './../../molecules/index';

@NgModule({
    declarations: [
        LaunchFromJsonComponent,
    ],
    exports: [
        LaunchFromJsonComponent,
    ],
    imports: [
        BaseWebSdkFormModule,
        CommonModule,
        FormsModule,
    ],
})
export class LaunchFromJsonModule { }
