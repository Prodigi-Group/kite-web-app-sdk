import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

import {
    KiteWebAppSdk,
} from './../../../../src/index';

const defaultUrl1 = 'https://s3.amazonaws.com/kiteshopify/' +
    'e2f57aa4-10a4-47e4-a87a-99bf8c4730dc_preview.jpeg';
const defaultUrl2 = 'https://s3.amazonaws.com/kiteshopify/' +
    '3b1a994f-4d85-42f1-8507-9b16f5c2b270_preview.jpeg';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'launch-with-items-component',
    styleUrls: [
        './launch-with-items.component.scss',
    ],
    templateUrl: './launch-with-items.component.template.pug',
})
export class LaunchWithItemsComponent {
    public formData = {
        baseUrl: 'http://dev-wall-art.kite.ly/canon/',
        collectorImages: [{
            dimensions: {
                height: 750,
                width: 1125,
            },
            thumbnailUrl: defaultUrl2,
            url: defaultUrl2,
        }, {
            dimensions: {
                height: 750,
                width: 1000,
            },
            thumbnailUrl: defaultUrl1,
            url: defaultUrl1,
        }],
        lineItems: [{
            imageUrls: [{
                urlFull: defaultUrl1,
                urlPreview: defaultUrl1,
            }],
            templateId: 'fap1_25_blackframe_16x12',
        }, {
            imageUrls: [{
                urlFull: defaultUrl1,
                urlPreview: defaultUrl1,
            }],
            templateId: 'fap_2_blackframe_24x32',
        }],
    };

    public launchWithItemsAndImages() {
        const lineItems = this.formData.lineItems.map(({
            imageUrls,
            templateId,
        }) => KiteWebAppSdk.initaliseLineItem(
            templateId,
            imageUrls,
        ));
        const collectorImages = this.formData.collectorImages.map(({
            dimensions,
            thumbnailUrl,
            url,
        }) => KiteWebAppSdk.initialiseCollectorImage(
            url,
            thumbnailUrl,
            dimensions,
        ));
        KiteWebAppSdk.launchWithItemsAndImages({
            baseUrl: this.formData.baseUrl,
            collectorImages,
            lineItems,
        });
    }
}
