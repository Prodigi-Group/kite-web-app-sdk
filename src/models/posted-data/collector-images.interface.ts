import {
    DimensionsInterface,
} from '@kite-tech/components';

export interface CollectorImagesInterface {
    dimensions: DimensionsInterface;
    id: string;
    isUploadComplete?: boolean;
    timesUsed: number;
    thumbnailUrl: string;
    uploadError?: string;
    uploadProgress?: number;
    url: string;
}
