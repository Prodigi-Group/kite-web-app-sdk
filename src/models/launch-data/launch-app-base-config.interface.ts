import {
    BrandSettingsInterface,
    ConfigInterface,
    PostedCheckoutDataInterface,
} from './../index';

import {
    CheckoutFieldsInterface,
} from '@kite-tech/checkout-sdk';

import { FooterInterface } from './footer.interface';

export interface LaunchAppBaseConfigInterface {
    baseUrl: string;
    brandSettings?: BrandSettingsInterface;
    config?: ConfigInterface;
    checkout?: PostedCheckoutDataInterface;
    checkoutUserFields?: CheckoutFieldsInterface;
    footer?: FooterInterface;
    referenceId?: string;
}
