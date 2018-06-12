import {
    DimensionsInterface,
} from '@kite-tech/components';

export interface CollectorImageInterface {
    dimensions: DimensionsInterface;
    id: string;
    isUploadComplete?: boolean;
    thumbnailUrl: string;
    uploadError?: string;
    uploadProgress?: number;
    url: string;
}
