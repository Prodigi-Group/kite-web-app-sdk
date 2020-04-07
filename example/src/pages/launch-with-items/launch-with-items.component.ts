import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

import {
    KiteWebAppSdk,
} from './../../../../src/index';

import {
    initBaseFormData,
} from './../../helpers/functions/index';

import { UUID } from 'angular2-uuid';

const defaultUrl1 = 'https://s3.amazonaws.com/kiteshopify/' +
    'e2f57aa4-10a4-47e4-a87a-99bf8c4730dc_preview.jpeg';
const defaultUrl2 = 'https://s3.amazonaws.com/kiteshopify/' +
    '3b1a994f-4d85-42f1-8507-9b16f5c2b270_preview.jpeg';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'launch-with-items-component',
    templateUrl: './launch-with-items.component.template.pug',
})
export class LaunchWithItemsComponent {
    public formData = {
        collectorImages: [{
            dimensions: {
                height: 750,
                width: 1125,
            },
            id: '1',
            thumbnailUrl: defaultUrl2,
            url: defaultUrl2,
        }, {
            dimensions: {
                height: 750,
                width: 1000,
            },
            id: '2',
            thumbnailUrl: defaultUrl1,
            url: defaultUrl1,
        }],
        lineItems: [{
            aspect: '',
            id: '1',
            imageUrls: [{
                urlFull: defaultUrl1,
                urlPreview: defaultUrl1,
            }],
            options: {},
            templateId: 'i8plus_tough_case',
        }, {
            aspect: '',
            id: '2',
            imageUrls: [{
                urlFull: defaultUrl2,
                urlPreview: defaultUrl2,
            }],
            options: {
                color: '',
                size: '',
            },
            templateId: 'i8plus_tough_case',
        }],
    };

    public baseFormData = initBaseFormData();

    public deleteCollectorImage(collectionImageId: string) {
        this.formData.collectorImages = this.formData.collectorImages
            .filter((collectorImageid) => (
                collectorImageid.id !== collectionImageId
            ));
    }

    public addCollectorImage() {
        this.formData.collectorImages = [
            ...this.formData.collectorImages,
            {
                dimensions: {
                    height: 0,
                    width: 0,
                },
                id: UUID.UUID(),
                thumbnailUrl: '',
                url: '',
            },
        ];
    }

    public deleteLineItem(lineItemId: string) {
        this.formData.lineItems = this.formData.lineItems.filter((lineItem) => (
            lineItem.id !== lineItemId
        ));
    }

    public addLineItem() {
        this.formData.lineItems = [
            ...this.formData.lineItems,
            {
                aspect: '',
                id: UUID.UUID(),
                imageUrls: [{
                    urlFull: '',
                    urlPreview: '',
                }],
                options: {},
                templateId: 'i8plus_tough_case',
            },
        ];
    }

    public launchWithItemsAndImages() {
        const lineItems = this.formData.lineItems.map(({
            imageUrls,
            templateId,
        }) => KiteWebAppSdk.initaliseLineItem(
            templateId,
            imageUrls,
        ));
        lineItems.forEach((value, index) => {
            if (this.formData.lineItems[index].aspect === 'fit') {
                lineItems[index].images[0]['aspect'] = 'fit';
            }
        });
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
            ...this.baseFormData,
            collectorImages,
            lineItems,
        });
    }
}
