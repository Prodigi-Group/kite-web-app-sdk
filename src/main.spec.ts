const mockUUID = 'testUUID';
const PRINT_ENGINE_URL = 'https://print-engine.prodigi.com/v1';
jest.mock('angular2-uuid', () => ({
    UUID: {
        UUID: () => mockUUID,
    },
}));

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
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
            'id',
        );

        expect(lineItem.id).toBe('id');
    });

    test('Sets id to a UUID if not defined in the arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
        );

        expect(lineItem.id).toBe(mockUUID);
    });

    test('Creates the same number of images as in the imageUrls array', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
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
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
        );

        expect(lineItem.images[0].mirror).toBe(false);
        expect(lineItem.images[1].mirror).toBe(false);
    });

    test('Sets rotate_degrees to 0 for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
        );

        expect(lineItem.images[0].rotate_degrees).toBe(0);
        expect(lineItem.images[1].rotate_degrees).toBe(0);
    });

    test('Sets scale to 1 for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
        );

        expect(lineItem.images[0].scale).toBe(1);
        expect(lineItem.images[1].scale).toBe(1);
    });

    test('Sets tx to 0 for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
        );

        expect(lineItem.images[0].tx).toBe(0);
        expect(lineItem.images[1].tx).toBe(0);
    });

    test('Sets ty to 0 for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
        );

        expect(lineItem.images[0].ty).toBe(0);
        expect(lineItem.images[1].ty).toBe(0);
    });

    test('Sets url_full for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
        );

        expect(lineItem.images[0].url_full).toBe('urlFull');
        expect(lineItem.images[1].url_full).toBe('urlFull2');
    });

    test('Sets url_preview for each created images', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
        );

        expect(lineItem.images[0].url_preview).toBe('urlPreview');
        expect(lineItem.images[1].url_preview).toBe('urlPreview2');
    });

    test('Sets templateId to the value in the argument', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
        );

        expect(lineItem.templateId).toBe('templateId');
    });

    test('Sets variantName to the value in the argument', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
            undefined,
            'variant',
        );

        expect(lineItem.variantName).toBe('variant');
    });

    test('Sets variantName to cover if not defined in the arguments', () => {
        const kiteWebAppSdk = initKiteWebAppSdk();

        const lineItem = kiteWebAppSdk.initaliseLineItem(
            'templateId',
            [
                {
                    urlFull: 'urlFull',
                    urlPreview: 'urlPreview',
                }, {
                    urlFull: 'urlFull2',
                    urlPreview: 'urlPreview2',
                },
            ],
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
            collectorImages: [
                {
                    id: 'collector1',
                },
            ],
            lineItems: [
                {
                    id: 'lineItem1',
                },
            ],
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
                config,
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
            referenceId: 'refId',
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
                referenceId: 'refId',
            }),
        );
    });
});

describe('postData', () => {
    window.open = jest.fn();
    const mockSuccessResponse = {
        id: 'postedDataId',
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
        ok: true,
    });
    global['fetch'] = jest.fn().mockImplementation(() => mockFetchPromise);

    test('Posts launch data to backend', () => {
        const kiteWebAppSdk = initKiteWebAppSdk(window);
        const testPath = 'testPath';
        const testData = JSON.stringify({});
        kiteWebAppSdk.postData(testPath, testData);

        expect(global['fetch']).toHaveBeenCalledTimes(1);
        expect(global['fetch']).toHaveBeenCalledWith(PRINT_ENGINE_URL + '/post-data/', {
            body: testData,
            method: 'POST',
        });
    });

    test('Calls launch function with correct path, postedDataId', (done) => {
        const kiteWebAppSdk = initKiteWebAppSdk(window);
        const testPath = 'testPath';
        const testData = JSON.stringify({
            config: {
                startInNewTab: false,
            },
        });
        kiteWebAppSdk.postData(testPath, testData);

        const spy = jest.spyOn(kiteWebAppSdk, 'launchWithPostedData');
        fetch('postedDataId').then((res) => res.json())
            .then((postedDataId) => {
                expect(spy).toHaveBeenCalledWith(testPath, postedDataId, undefined);
                done();
            });
    });

    test('Calls launch function with correct path, postedDataId and window reference if startInNewTab config is true', (done) => {
        const kiteWebAppSdk = initKiteWebAppSdk(window);
        const testPath = 'testPath';
        const testData = JSON.stringify({
            config: {
                startInNewTab: true,
            },
        });
        const newWindow = window.open();
        kiteWebAppSdk.postData(testPath, testData);

        const spy = jest.spyOn(kiteWebAppSdk, 'launchWithPostedData');
        fetch('postedDataId').then((res) => res.json())
            .then((postedDataId) => {
                expect(spy).toHaveBeenCalledWith(testPath, postedDataId, newWindow);
                done();
            });
    });
});

describe('launchWithPostedData', () => {
    window.focus = jest.fn();
    window.location.assign = jest.fn();
    const mockPostedDataId = 'postedDataId';

    test('Correctly handles launching URLs with hash', () => {
        const kiteWebAppSdk = initKiteWebAppSdk(window);
        const mockUrlPassedByUser = 'http://example.com/#/test';
        const mockFinalUrl = `http://example.com/?postedDataId=${mockPostedDataId}#/test`;
        kiteWebAppSdk.launchWithPostedData(mockUrlPassedByUser, mockPostedDataId);
        expect(window.location.assign).toBeCalledWith(mockFinalUrl);
    });

    test('Correctly handles launching URLs without hash', () => {
        const kiteWebAppSdk = initKiteWebAppSdk(window);
        const mockUrlPassedByUser = 'http://example.com/test';
        const mockFinalUrl = `http://example.com/test?postedDataId=${mockPostedDataId}`;
        kiteWebAppSdk.launchWithPostedData(mockUrlPassedByUser, mockPostedDataId);
        expect(window.location.assign).toBeCalledWith(mockFinalUrl);
    });

    test('Launches print-shop in a new tab if startInNewTab config is true', () => {
        const kiteWebAppSdk = initKiteWebAppSdk(window);
        const newWindow = window;
        const mockUrlPassedByUser = 'http://example.com/test';
        const mockFinalUrl = `http://example.com/test?postedDataId=${mockPostedDataId}`;
        kiteWebAppSdk.launchWithPostedData(mockUrlPassedByUser, mockPostedDataId, newWindow);
        expect(newWindow.location.assign).toBeCalledWith(mockFinalUrl);
        expect(newWindow.focus).toBeCalled();
    });
});
