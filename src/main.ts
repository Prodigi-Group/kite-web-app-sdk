import {
    KiteWebAppSdkPostedDataInterface,
    LaunchAppBaseConfigInterface,
    LaunchAppFromJSONInterface,
    LaunchAppWithItemsInterface,
    LineItemInterface,
} from './models/index';

import {
    CollectorImageInterface,
    DimensionsInterface,
} from '@kite-tech/components';

import { UUID } from 'angular2-uuid';

export class KiteWebAppSdk {
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

    public launchFromJSON(config: LaunchAppFromJSONInterface) {
        const {
            appStateJSONString,
        } = config;
        const jsonData: KiteWebAppSdkPostedDataInterface = {
            appStateJSONString,
        };

        this.postSdkDataWithBaseProperties(
            jsonData,
            config,
        );
    }

    public postSdkDataWithBaseProperties(
        sdkData: KiteWebAppSdkPostedDataInterface,
        {
            baseUrl,
            brandSettings,
            checkout,
            checkoutUserFields,
        }: LaunchAppBaseConfigInterface,
    ) {
        const sdkDataWithBaseConfig = {
            ...sdkData,
            brandSettings,
            checkout,
            checkoutUserFields,
        };
        this.postData(
            baseUrl,
            JSON.stringify(sdkDataWithBaseConfig),
        );
    }

    public postData(
        path: string,
        jsonData: string,
    ) {
        const document = this._window.document;
        const form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', path);
        form.acceptCharset = 'utf-8';

        const hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', 'data');
        hiddenField.setAttribute('value', jsonData);

        form.appendChild(hiddenField);

        document.body.appendChild(form);
        form.submit();
    }
}
