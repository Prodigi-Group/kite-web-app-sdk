const mockUUID = 'testUUID';
jest.mock('angular2-uuid', () => ({
    UUID: {
        UUID: () => mockUUID,
    },
}));
import { UUID } from 'angular2-uuid';

import {
    KiteWebAppSdk,
} from './main';

import {
    KiteWebAppSdkPostedDataInterface,
    LaunchAppBaseConfigInterface,
    LaunchAppFromJSONInterface,
    LaunchAppWithItemsInterface,
} from './models';

const initKiteWebAppSdk = (
    window?: Window,
) => {
    return new KiteWebAppSdk(window);
};

describe('initaliseLineItem', () => {
    test('Sets id to the value in the argument', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
            'id',
        );

        expect(lineItem.id).toBe('id');
    });

    test('Sets id to a UUID if not defined in the arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.id).toBe(mockUUID);
    });

    test('Creates the same number of images as in the imageUrls array', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.images).toHaveLength(2);
    });

    test('Sets filters to null for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.images[0].filters).toBeNull();
        expect(lineItem.images[1].filters).toBeNull();
    });

    test('Sets mirror to false for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.images[0].mirror).toBe(false);
        expect(lineItem.images[1].mirror).toBe(false);
    });

    test('Sets rotate_degrees to 0 for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.images[0].rotate_degrees).toBe(0);
        expect(lineItem.images[1].rotate_degrees).toBe(0);
    });

    test('Sets scale to 1 for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.images[0].scale).toBe(1);
        expect(lineItem.images[1].scale).toBe(1);
    });

    test('Sets tx to 0 for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.images[0].tx).toBe(0);
        expect(lineItem.images[1].tx).toBe(0);
    });

    test('Sets ty to 0 for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.images[0].ty).toBe(0);
        expect(lineItem.images[1].ty).toBe(0);
    });

    test('Sets url_full for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.images[0].url_full).toBe('urlFull');
        expect(lineItem.images[1].url_full).toBe('urlFull2');
    });

    test('Sets url_preview for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.images[0].url_preview).toBe('urlPreview');
        expect(lineItem.images[1].url_preview).toBe('urlPreview2');
    });

    test('Sets templateId to the value in the argument', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.templateId).toBe('templateId');
    });

    test('Sets variantName to the value in the argument', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
            undefined,
            'variant',
        );

        expect(lineItem.variantName).toBe('variant');
    });

    test('Sets variantName to cover if not defined in the arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [{
                urlFull: 'urlFull',
                urlPreview: 'urlPreview',
            }, {
                urlFull: 'urlFull2',
                urlPreview: 'urlPreview2',
            }],
        );

        expect(lineItem.variantName).toBe('cover');
    });
});

describe('initialiseCollectorImage', () => {
    test('Sets dimensions to the value from the arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();
        const dimensions = {
            height: 50,
            width: 100,
        };

        const collectorImage = kiteWebAppSdk.initialiseCollectorImage(
            'url',
            'thumbnailUrl',
            dimensions,
        );

        expect(collectorImage.dimensions).toBe(dimensions);
    });

    test('Sets id to the value from the arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const collectorImage = kiteWebAppSdk.initialiseCollectorImage(
            'url',
            'thumbnailUrl',
            undefined,
            '12',
        );

        expect(collectorImage.id).toBe('12');
    });

    // tslint:disable-next-line
    test('Sets id to the result of UUID.UUID if not defined in the arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const collectorImage = kiteWebAppSdk.initialiseCollectorImage(
            'url',
            'thumbnailUrl',
            undefined,
        );

        expect(collectorImage.id).toBe(mockUUID);
    });

    test('Sets isUploadComplete to true', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const collectorImage = kiteWebAppSdk.initialiseCollectorImage(
            'url',
            'thumbnailUrl',
            undefined,
        );

        expect(collectorImage.isUploadComplete).toBe(true);
    });

    test('Sets thumbnailUrl to value from the arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const collectorImage = kiteWebAppSdk.initialiseCollectorImage(
            'url',
            'thumbnailUrl',
            undefined,
        );

        expect(collectorImage.thumbnailUrl).toBe('thumbnailUrl');
    });

    test('Sets url to the value in the arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const collectorImage = kiteWebAppSdk.initialiseCollectorImage(
            'url',
            'thumbnailUrl',
            undefined,
        );

        expect(collectorImage.url).toBe('url');
    });
});

describe('launchWithItemsAndImages', () => {
    const initLaunchWithItemsAndImagesData = () => {
        const config = {
            collectorImages: [{
                id: 'collector1',
            }],
            lineItems: [{
                id: 'lineItem1',
            }],
        } as LaunchAppWithItemsInterface;
        const kiteWebAppSdk = initKiteWebAppSdk();
        kiteWebAppSdk.postSdkDataWithBaseProperties = jest.fn();

        return {
            config,
            kiteWebAppSdk,
        };
    };

    test('Calls postSdkDataWithBaseProperties with the expected data', () => {
        const {
            config,
            kiteWebAppSdk,
        } = initLaunchWithItemsAndImagesData();

        kiteWebAppSdk.launchWithItemsAndImages(config);

        expect(kiteWebAppSdk.postSdkDataWithBaseProperties)
            .toHaveBeenCalledWith(
                {
                    collectorImages: config.collectorImages,
                    lineItems: config.lineItems,
                } as KiteWebAppSdkPostedDataInterface,
                config,
            );
    });

    // tslint:disable-next-line
    test('Calls postSdkDataWithBaseProperties with an empty array for lineItems if undefined in the config argument', () => {
        const {
            config,
            kiteWebAppSdk,
        } = initLaunchWithItemsAndImagesData();
        config.lineItems = undefined;

        kiteWebAppSdk.launchWithItemsAndImages(config);

        expect(kiteWebAppSdk.postSdkDataWithBaseProperties)
            .toHaveBeenCalledWith(
                {
                    collectorImages: config.collectorImages,
                    lineItems: [],
                } as KiteWebAppSdkPostedDataInterface,
                config,
            );
    });

    // tslint:disable-next-line
    test('Calls postSdkDataWithBaseProperties with an empty array for collectorImages if undefined in the config argument', () => {
        const {
            config,
            kiteWebAppSdk,
        } = initLaunchWithItemsAndImagesData();
        config.collectorImages = undefined;

        kiteWebAppSdk.launchWithItemsAndImages(config);

        expect(kiteWebAppSdk.postSdkDataWithBaseProperties)
            .toHaveBeenCalledWith(
                {
                    collectorImages: [],
                    lineItems: config.lineItems,
                } as KiteWebAppSdkPostedDataInterface,
                config,
            );
    });
});

describe('launchFromJSON', () => {
    // tslint:disable-next-line
    test('Calls postSdkDataWithBaseProperties with the expected arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();
        kiteWebAppSdk.postSdkDataWithBaseProperties = jest.fn();
        const config = {
            appStateJSONString: 'jsonString',
            checkout: {
                checkoutUrl: 'checkoutUrl',
            },
            checkoutUserFields: {
                customerEmail: 'email',
            },
        } as LaunchAppFromJSONInterface;

        kiteWebAppSdk.launchFromJSON(config);

        expect(kiteWebAppSdk.postSdkDataWithBaseProperties)
            .toHaveBeenCalledWith(
                {
                    appStateJSONString: 'jsonString',
                },
                config,
            );
    });
});

describe('postSdkDataWithBaseProperties', () => {
    test('Calls postData with the expected arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();
        kiteWebAppSdk.postData = jest.fn();
        const sdkPostedData = {
            appStateJSONString: 'json',
        } as KiteWebAppSdkPostedDataInterface;
        const launchAppBase = {
            baseUrl: 'testBaseUrl',
            brandSettings: {
                publishableKey: 'pk1',
            },
            checkout: {
                checkoutUrl: 'checkout',
            },
            checkoutUserFields: {
                customerEmail: 'email',
            },
        } as LaunchAppBaseConfigInterface;

        kiteWebAppSdk.postSdkDataWithBaseProperties(
            sdkPostedData,
            launchAppBase,
        );

        expect(kiteWebAppSdk.postData).toHaveBeenCalledWith(
            'testBaseUrl',
            JSON.stringify({
                appStateJSONString: 'json',
                brandSettings: {
                    publishableKey: 'pk1',
                },
                checkout: {
                    checkoutUrl: 'checkout',
                },
                checkoutUserFields: {
                    customerEmail: 'email',
                },
            }),
        );
    });
});

describe('postData', () => {
    const initPostData = () => {
        const window = {
            document: {
                body: {},
            },
        } as Window;
        const form = {} as HTMLFormElement;
        form.setAttribute = jest.fn();
        form.appendChild = jest.fn();
        form.submit = jest.fn();
        const input = {} as HTMLInputElement;
        input.setAttribute = jest.fn();
        window.document.createElement = jest.fn()
            .mockReturnValueOnce(form)
            .mockReturnValueOnce(input);
        window.document.body.appendChild = jest.fn();
        const kiteWebAppSdk = initKiteWebAppSdk(
            window,
        );

        return {
            form,
            input,
            kiteWebAppSdk,
            window,
        };
    };

    test('Creates a form on the document', () => {
        const {
            kiteWebAppSdk,
            window,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(window.document.createElement).toHaveBeenCalledWith(
            'form',
        );
    });

    test('Sets the form method to post', () => {
        const {
            form,
            kiteWebAppSdk,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(form.setAttribute).toHaveBeenCalledWith(
            'method', 'post',
        );
    });

    test('Sets the form action to the supplied path', () => {
        const {
            form,
            kiteWebAppSdk,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(form.setAttribute).toHaveBeenCalledWith(
            'action', 'test',
        );
    });

    test('Sets the form charset to utf-8', () => {
        const {
            form,
            kiteWebAppSdk,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(form.acceptCharset).toBe('utf-8');
    });

    test('Creates an input element on the document', () => {
        const {
            kiteWebAppSdk,
            window,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(window.document.createElement)
            .toHaveBeenCalledWith('input');
    });

    test('Sets the input type to hidden', () => {
        const {
            input,
            kiteWebAppSdk,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(input.setAttribute).toHaveBeenCalledWith(
            'type', 'hidden',
        );
    });

    test('Sets the input name to data', () => {
        const {
            input,
            kiteWebAppSdk,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(input.setAttribute).toHaveBeenCalledWith(
            'name', 'data',
        );
    });

    test('Sets the input value to the jsonData', () => {
        const {
            input,
            kiteWebAppSdk,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(input.setAttribute).toHaveBeenCalledWith(
            'value', 'json',
        );
    });

    test('Appends the input to the form', () => {
        const {
            form,
            input,
            kiteWebAppSdk,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(form.appendChild).toHaveBeenCalledWith(
            input,
        );
    });

    test('Appends the form to the document body', () => {
        const {
            form,
            kiteWebAppSdk,
            window,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(window.document.body.appendChild).toHaveBeenCalledWith(
            form,
        );
    });

    test('Submits the form', () => {
        const {
            form,
            kiteWebAppSdk,
        } = initPostData();

        kiteWebAppSdk.postData('test', 'json');

        expect(form.submit).toHaveBeenCalled();
    });
});
