import { Routes } from '@angular/router';

import {
    LaunchFromJsonComponent,
    LaunchWithItemsComponent,
} from './../pages/index';

const launchFromItems = 'launch-with-items';
export const rootRouterConfig: Routes = [
    { path: launchFromItems, component: LaunchWithItemsComponent },
    { path: launchFromItems, component: LaunchWithItemsComponent },
    { path: 'launch-from-json', component: LaunchFromJsonComponent },
    { path: '', redirectTo: launchFromItems, pathMatch: 'full' },
];
