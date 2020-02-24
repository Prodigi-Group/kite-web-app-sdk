import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';

import {
    LaunchFromJsonModule,
    LaunchWithItemsModule,
    LaunchSandboxModule,
} from './../pages/index';

import {
    HeaderModule,
} from './../organisms/index';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
    ],
    exports: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        LaunchFromJsonModule,
        LaunchWithItemsModule,
        LaunchSandboxModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    ],
})
export class AppModule { }
