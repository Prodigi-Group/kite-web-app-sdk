import {
    CollectorImageInterface,
    LaunchAppBaseConfigInterface,
    LineItemInterface,
} from './index';

export interface LaunchAppWithItemsInterface
extends LaunchAppBaseConfigInterface {
    collectorImages?: CollectorImageInterface[];
    lineItems?: LineItemInterface[];
}
