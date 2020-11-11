import { DimensionsInterface } from './dimensions.interface';

export interface CollectorImageInterface {
  dimensions: DimensionsInterface;
  id: string;
  isUploadComplete: boolean;
  thumbnailUrl: string;
  url: string;
}
