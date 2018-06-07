import * as KiteWebAppSdkWrapper from './main';

export * from './models/index';

// tslint:disable-next-line
export const KiteWebAppSdk = new KiteWebAppSdkWrapper.KiteWebAppSdk(window);
