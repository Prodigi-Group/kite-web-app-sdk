import { FooterLinkTranslationInterface } from './footer-link-translation.interface';

export interface FooterLinkInterface {
    defaultText: string;
    translations?: FooterLinkTranslationInterface[];
    url: string;
    newFrame: boolean;
}
