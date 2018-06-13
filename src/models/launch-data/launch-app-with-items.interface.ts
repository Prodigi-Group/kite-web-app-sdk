import {
    LaunchAppBaseConfigInterface,
} from './index';

import {
    LineItemInterface,
} from './../index';

import {
    CollectorImageInterface,
} from '@kite-tech/components';

export interface LaunchAppWithItemsInterface
extends LaunchAppBaseConfigInterface {
    collectorImages?: CollectorImageInterface[];
    lineItems?: LineItemInterface[];
}
