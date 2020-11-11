export interface LineItemInterface {
    designId?: string; 
    images: Array<{
        filters: string,
        fieldName?: string;
        mirror: boolean;
        rotate_degrees: number;
        scale: number;
        aspect?: string;
        tx: number;
        ty: number;
        url_full: string;
        url_preview: string;
    }>;
    id: string;
    affiliate_id?: string;
    templateId: string;
    variantName: string;
    options?: {
        color: string;
    };
}
