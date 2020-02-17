import {
    BrandSettingsInterface,
    CollectorImageInterface,
} from '@kite-tech/components';

import {
    CheckoutFieldsInterface,
} from '@kite-tech/checkout-sdk';

import {
    LineItemInterface,
    PostedCheckoutDataInterface,
    OtherSettingsInterface,
    UserDataInterface,
    FooterInterface,
} from './../index';

export interface KiteWebAppSdkPostedDataInterface {
    appStateJSONString?: string;
    brandSettings?: BrandSettingsInterface;
    checkout?: PostedCheckoutDataInterface;
    checkoutUserFields?: CheckoutFieldsInterface;
    collectorImages?: CollectorImageInterface[];
    lineItems?: LineItemInterface[];
    referenceId?: string;
    // To store partner-provided information about customer.
    otherSettings?: OtherSettingsInterface;
    userData?: UserDataInterface;
    footer?: FooterInterface;
}
