import {
    LaunchAppBaseConfigInterface,
} from './index';

import {
    CollectorImagesInterface,
    LineItemInterface,
} from './../index';

export interface LaunchAppWithItemsInterface
extends LaunchAppBaseConfigInterface {
    collectorImages?: CollectorImagesInterface[];
    lineItems?: LineItemInterface[];
}
