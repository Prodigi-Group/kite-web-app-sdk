import {
    LaunchAppBaseConfigInterface,
} from './../../../../src/index';

export function initBaseFormData(): LaunchAppBaseConfigInterface {
    return {
        baseUrl: 'http://dev-wall-art.kite.ly/canon/#/create',
        brandSettings: {
            brandColor: '#32cd32',
            brandName: 'canon',
            checkoutLogoImage: 'https://s3.amazonaws.com/kiteshopify/' +
                'e2f57aa4-10a4-47e4-a87a-99bf8c4730dc_preview.jpeg',
            checkoutLogoLinkUrl: 'http://canon.com',
            mixpanelToken: 'mixpanelToken',
            publishableKey: 'pk_live_605f5643f65599624ee886c0ee39474812537df9',
            testPublishableKey:
                'pk_test_5c0f2c5bd8e176e44bd4fa65b8c2cc7abea07842',
            universalAnalyticsToken: 'uaToken',
        },
        checkout: {
            cancelCallbackUrls: [{
                method: 'GET',
                url: 'http://test.com',
            }],
            checkoutUrl: 'https://staging-checkout.irista.com',
            successCallbackUrls: [{
                method: 'GET',
                url: 'http://success.com',
            }],
            successRedirectUrl: 'http://google.com',
        },
        checkoutUserFields: {
            customerEmail: 'chris@kite.ly',
            optInToMarketing: false,
            shippingAddress: {
                address_line_1: 'A1',
                address_line_2: 'A2',
                city: 'London',
                county_state: 'London',
                postcode: 'E28EB',
                recipient_first_name: 'C',
                recipient_last_name: 'B',
            },
        },
        referenceId: 'refId',
    };
}
