import {
    BrandSettingsInterface,
} from '@kite-tech/components';

import {
    CheckoutFieldsInterface,
} from '@kite-tech/checkout-sdk';

import {
    CollectorImageInterface,
    LineItemInterface,
    PostedCheckoutDataInterface,
} from './../index';

export interface KiteWebAppSdkPostedDataInterface {
    appStateJSONString?: string;
    brandSettings?: BrandSettingsInterface;
    checkout?: PostedCheckoutDataInterface;
    checkoutUserFields?: CheckoutFieldsInterface;
    collectorImages?: CollectorImageInterface[];
    lineItems?: LineItemInterface[];
}
