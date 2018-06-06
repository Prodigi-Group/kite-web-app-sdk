import * as KiteWebAppSdkWrapper from './src/main';
// tslint:disable-next-line
export const KiteWebAppSdk = new KiteWebAppSdkWrapper.KiteWebAppSdk(window);

(window as any).KiteWebAppSdk = KiteWebAppSdk;
