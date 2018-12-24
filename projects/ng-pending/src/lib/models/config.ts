import { ILoaderConfig } from './loaderConfig';
import { IOverlayConfig } from './overlayConfig';

export interface IConfig {
    component?: any;
    loaderConfig?: ILoaderConfig;
    overlayConfig?: IOverlayConfig;
}
