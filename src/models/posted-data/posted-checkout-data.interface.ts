import {
    CallbackUrlInterface,
} from '@kite-tech/checkout-sdk';

export interface PostedCheckoutDataInterface {
    checkoutUrl?: string;
    cancelCallbackUrls?: CallbackUrlInterface[];
    successCallbackUrls?: CallbackUrlInterface[];
    successRedirectUrl?: string;
}
