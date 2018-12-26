import { ILoaderConfig } from './loaderConfig';
import { IOverlayConfig } from './overlayConfig';
import { IMessageConfig } from './messageConfig';

export interface IConfig {
    component?: any;
    loaderConfig?: ILoaderConfig;
    overlayConfig?: IOverlayConfig;
    messageConfig?: IMessageConfig;
}
