import { KiteWebAppSdkPostedDataInterface, LaunchAppBaseConfigInterface, LaunchAppFromJSONInterface, LaunchAppWithItemsInterface, LineItemInterface } from './models/index';
import { CollectorImageInterface, DimensionsInterface } from '@kite-tech/components';
export declare class KiteWebAppSdk {
    private _window;
    constructor(_window: Window);
    initaliseLineItem(templateId: string, imageUrls?: Array<{
        urlFull: string;
        urlPreview: string;
    }>, id?: string, variantName?: string): LineItemInterface;
    initialiseCollectorImage(url: string, thumbnailUrl: string, dimensions: DimensionsInterface, id?: string): CollectorImageInterface;
    launchWithItemsAndImages(config: LaunchAppWithItemsInterface): void;
    launchFromJSON(config: LaunchAppFromJSONInterface): void;
    postSdkDataWithBaseProperties(sdkData: KiteWebAppSdkPostedDataInterface, { baseUrl, brandSettings, checkout, checkoutUserFields, referenceId, }: LaunchAppBaseConfigInterface): void;
    postData(path: string, jsonData: string): void;
}
