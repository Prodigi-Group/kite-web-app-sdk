import { Routes } from '@angular/router';

import {
    LaunchFromJsonComponent,
    LaunchWithItemsComponent,
    LaunchSandboxComponent,
} from './../pages/index';

const launchFromItems = 'launch-with-items';
export const rootRouterConfig: Routes = [
    { path: launchFromItems, component: LaunchWithItemsComponent },
    { path: launchFromItems, component: LaunchWithItemsComponent },
    { path: 'launch-from-json', component: LaunchFromJsonComponent },
    { path: 'launch-sandbox', component: LaunchSandboxComponent },
    { path: '', redirectTo: launchFromItems, pathMatch: 'full' },
];
