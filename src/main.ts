import {
    CollectorImageInterface,
    DimensionsInterface,
    KiteWebAppSdkPostedDataInterface,
    LaunchAppBaseConfigInterface,
    LaunchAppWithItemsInterface,
    LineItemInterface,
} from './models/index';

import { UUID } from 'angular2-uuid';

export class KiteWebAppSdk {
    private lineItemsToProcess: number;
    private lineItemsProcessed: number;
    private productBaseUrl: string = 'https://image.kite.ly/product/';
    private printEngineBaseUrl: string = 'https://print-engine.prodigi.com/v1';

    constructor(
        private _window: Window,
    ) {}

    public initaliseLineItem(
        templateId: string,
        imageUrls: Array<{
            urlFull: string,
            urlPreview: string,
        }> = [],
        id = UUID.UUID(),
        variantName = 'cover',
    ): LineItemInterface {
        return {
            id,
            images: imageUrls.map(({
                urlFull,
                urlPreview,
            }) => ({
                filters: null,
                mirror: false,
                rotate_degrees: 0,
                scale: 1,
                tx: 0,
                ty: 0,
                url_full: urlFull,
                url_preview: urlPreview,
            })),
            templateId,
            variantName,
        };
    }

    public initialiseCollectorImage(
        url: string,
        thumbnailUrl: string,
        dimensions: DimensionsInterface,
        id = UUID.UUID(),
    ): CollectorImageInterface {
        return {
            dimensions,
            id,
            isUploadComplete: true,
            thumbnailUrl,
            url,
        };
    }

    public launchWithItemsAndImages(config: LaunchAppWithItemsInterface) {
        const {
            collectorImages = [],
            lineItems = [],
        } = config;
        const jsonData: KiteWebAppSdkPostedDataInterface = {
            collectorImages,
            lineItems,
        };

        this.postSdkDataWithBaseProperties(
            jsonData,
            config,
        );
    }

    public launchFromJSON(config: LaunchAppWithItemsInterface) {
        this.postSdkDataWithBaseProperties(
            config,
            config,
        );
    }

    private calculateAndSetNewScale(product, imageObject, imageWidth, imageHeight) {
        const fitWidth = product.images[0].asset_size.width;
        const fitHeight = product.images[0].asset_size.height;

        const pigScale = Math.max(fitWidth / imageWidth, fitHeight / imageHeight);
        const newImageWidth = pigScale * imageWidth;
        const newImageHeight = pigScale * imageHeight;
        const newScale = Math.min(fitWidth / newImageWidth, fitHeight / newImageHeight);

        imageObject.scale = newScale;
        delete imageObject.aspect;
    }

    private processScaleAndPost(image, templateId, baseUrl, sdkData) {
        const img = new Image();
        img.src = image.url_preview;
        img.onload = () => {
            fetch(this.productBaseUrl + templateId + '/')
                .then((response) => {
                    return response.json();
                })
                .then((res) => {
                    if (image.aspect && image.aspect === 'fit') {
                        this.calculateAndSetNewScale(res, image, img.width, img.height);
                    }
                    this.lineItemsProcessed += 1;
                    if (this.lineItemsToProcess === this.lineItemsProcessed) {
                        this.postData(
                            baseUrl,
                            JSON.stringify(sdkData),
                        );
                    }
                })
                .catch((err) => {
                    // tslint:disable-next-line
                    console.error(err);
                });
        };
    }

    private processLineItems(baseUrl, sdkData) {
        this.lineItemsToProcess = (sdkData.lineItems).length;
        this.lineItemsProcessed = 0;
        (sdkData.lineItems).forEach((lineItem) => {
            this.processScaleAndPost(
                lineItem.images[0],
                lineItem.templateId,
                baseUrl,
                sdkData,
            );
        });
    }

    private checkAndSetLineItemIds(sdkData) {
        if (sdkData.lineItems) {
            (sdkData.lineItems).forEach((lineItem) => {
                if (!lineItem.id) {
                    lineItem.id = UUID.UUID();
                }
            });
        }
    }

    private postSdkDataWithBaseProperties(
        sdkData: KiteWebAppSdkPostedDataInterface,
        {
            baseUrl,
            brandSettings,
            checkout,
            checkoutUserFields,
            config,
            footer,
            referenceId,
        }: LaunchAppBaseConfigInterface,
    ) {
        const sdkDataWithBaseConfig = {
            ...sdkData,
            brandSettings,
            checkout,
            checkoutUserFields,
            config,
            footer,
            referenceId,
        };
        this.checkAndSetLineItemIds(sdkDataWithBaseConfig);
        const hasAspectFitSet = sdkDataWithBaseConfig.lineItems
            && sdkDataWithBaseConfig.lineItems
                .some((el) => el.images[0].hasOwnProperty('aspect') && el.images[0]['aspect'] === 'fit');
        if (!sdkDataWithBaseConfig.lineItems || !hasAspectFitSet) {
            this.postData(
                baseUrl,
                JSON.stringify(sdkDataWithBaseConfig),
            );
        } else {
            this.processLineItems(baseUrl, sdkDataWithBaseConfig);
        }
    }

    private postData(
        path: string,
        jsonData: string,
    ) {
        const parsedData = JSON.parse(jsonData);
        const shouldStartInNewTab =
            (parsedData.hasOwnProperty('config') &&
            parsedData.config.startInNewTab) ? true : false;
        let newWindow;
        if (shouldStartInNewTab) {
            newWindow = window.open('', '_blank');
        }

        fetch(this.printEngineBaseUrl + '/post-data/', {
            body: jsonData,
            method: 'POST',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((postedDataId) => {
                this.launchWithPostedData(path, postedDataId, newWindow);
            })
            .catch((err) => {
                if (newWindow) {
                    newWindow.close();
                }
                throw new Error(err);
            });

    }

    private launchWithPostedData(
        path: string,
        postedDataId: string,
        newWindow?: WindowProxy,
    ) {
        const splitPathByHash = path.split('#');
        const pathBeforeHash = splitPathByHash[0];
        const pathAfterHash = splitPathByHash[1];
        const pathWithPostedData = pathBeforeHash + '?postedDataId=' + postedDataId;

        let goToUrl = pathWithPostedData;
        if (pathAfterHash) {
            goToUrl += '#' + pathAfterHash;
        }

        if (newWindow) {
            newWindow.location.assign(goToUrl);
            newWindow.focus();
        } else {
            window.location.assign(goToUrl);
        }
    }
}
