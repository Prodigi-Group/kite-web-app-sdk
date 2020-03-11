import {
    BrandSettingsInterface,
    CollectorImageInterface,
} from '@kite-tech/components';

import {
    CheckoutFieldsInterface,
} from '@kite-tech/checkout-sdk';

import {
    ConfigInterface,
    LineItemInterface,
    PostedCheckoutDataInterface,
    FooterInterface,
} from './../index';

export interface KiteWebAppSdkPostedDataInterface {
    appStateJSONString?: string;
    brandSettings?: BrandSettingsInterface;
    config?: ConfigInterface;
    checkout?: PostedCheckoutDataInterface;
    checkoutUserFields?: CheckoutFieldsInterface;
    collectorImages?: CollectorImageInterface[];
    lineItems?: LineItemInterface[];
    referenceId?: string;
    footer?: FooterInterface;
}
