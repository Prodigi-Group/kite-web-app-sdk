import {
    ImageEditorImageInterface,
} from '@kite-tech/components';

export interface LineItemInterface {
    id?: string;
    templateId: string;
    images?: ImageEditorImageInterface[];
    variantName?: string;
}
