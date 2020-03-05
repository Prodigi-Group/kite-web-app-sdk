import {
    PostedCheckoutDataInterface
} from './../index';

import {
    CheckoutFieldsInterface,
} from '@kite-tech/checkout-sdk';

import {
    BrandSettingsInterface,
} from '@kite-tech/components';

export interface LaunchAppBaseConfigInterface {
    baseUrl: string;
    brandSettings?: BrandSettingsInterface;
    checkout?: PostedCheckoutDataInterface;
    checkoutUserFields?: CheckoutFieldsInterface;
    referenceId?: string;
    customerId?: string;
    externalReference?: string;
}
