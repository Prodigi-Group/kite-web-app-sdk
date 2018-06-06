import {
    BrandSettingsInterface,
} from '@kite-tech/components';

import {
    CheckoutFieldsInterface,
} from '@kite-tech/checkout-sdk';

import {
    CollectorImagesInterface,
    LineItemInterface,
    PostedCheckoutDataInterface,
} from './../index';

export interface KiteWebAppSdkPostedDataInterface {
    appStateJSONString?: string;
    brandSettings?: BrandSettingsInterface;
    checkout?: PostedCheckoutDataInterface;
    checkoutUserFields?: CheckoutFieldsInterface;
    collectorImages?: CollectorImagesInterface[];
    lineItems?: LineItemInterface[];
}
