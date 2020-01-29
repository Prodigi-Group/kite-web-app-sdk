import { CheckoutFieldsInterface } from '@kite-tech/checkout-sdk';
import {
    BrandSettingsInterface,
    CollectorImageInterface,
} from '@kite-tech/components';
import {
    LineItemInterface,
    PostedCheckoutDataInterface,
    UserDataInterface,
} from './../index';

export interface KiteWebAppSdkPostedDataInterface {
    appStateJSONString?: string;
    brandSettings?: BrandSettingsInterface;
    checkout?: PostedCheckoutDataInterface;
    checkoutUserFields?: CheckoutFieldsInterface;
    collectorImages?: CollectorImageInterface[];
    lineItems?: LineItemInterface[];
    referenceId?: string;
    userData?: UserDataInterface;
}
