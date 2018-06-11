import {
    LaunchAppBaseConfigInterface,
} from './index';

import {
    CollectorImageInterface,
    LineItemInterface,
} from './../index';

export interface LaunchAppWithItemsInterface
extends LaunchAppBaseConfigInterface {
    collectorImages?: CollectorImageInterface[];
    lineItems?: LineItemInterface[];
}
