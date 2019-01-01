import { ComponentFactory, ComponentRef } from '@angular/core';
import { BouncingLoaderComponent } from '../components/bouncing-loader/bouncing-loader.component';
import { IEngine } from '../models/engine';
import { IConfig } from '../models/config';
import { ILoaderConfig } from '../models/loaderConfig';

const defaultLoaderConfig: ILoaderConfig = {
    background: '#333',
    width: '40px',
    height: '40px'
};

const defaultLoaderPositionConfig = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    'z-index': '9999'
};

const defaultMessageConfig = {
    'font-size': '12px',
    color: '#000'
};

export class Loader {
    componentRef: ComponentRef<any>;
    loaderElement: HTMLElement;
    messageElement: HTMLElement;
    constructor(
        public rootElement: HTMLElement,
        public engine: IEngine,
        public rootConfig: IConfig
    ) {
        /*
            Creating this element here to keep the reference of the object so that
            the message can be updated.
        */
        this.messageElement = this.engine.renderer.createElement('div');
    }

    updateMessage(message: string, custom: IConfig = null) {
        if (this.loaderElement) {
            // use element level config if defined otherwise use root level config.
            const config = custom && custom.messageConfig || this.rootConfig.messageConfig;

            // override any default config with the config previously resolved.
            const messageConfig = { ...defaultMessageConfig, ...config };

            this.applyStylesToElement(this.messageElement, messageConfig);
            this.engine.renderer.setProperty(this.messageElement, 'innerHTML', message);
            this.loaderElement.appendChild(this.messageElement);
        }
    }

    addLoader(custom: IConfig = null) {
        // use element level config if defined otherwise use root level config to get the Loader Component.
        const loaderComponent =  custom && custom.component || this.rootConfig.component || BouncingLoaderComponent;

        // use element level config if defined otherwise use root level config.
        const finalizeLoaderConfig = custom && custom.loaderConfig || this.rootConfig.loaderConfig;

        /* Spilitting the object using the spread operator to Loader specific styles and loader position styles
            because custom loader have seprate DOM's for Loader and the container that is positioning the loader.
            Also override any default config with the config previously resolved. */
        const { background, width, height, ...rest } = { ...finalizeLoaderConfig };
        const loaderConfig = { ...defaultLoaderConfig, background, width, height };
        const positionConfig = { ...defaultLoaderPositionConfig, ...rest };

        const componentFactory = this.engine.factoryResolver.resolveComponentFactory(loaderComponent);
        this.componentRef = this.engine.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.config = loaderConfig;
        this.loaderElement = this.componentRef.location.nativeElement;
        this.applyStylesToElement(this.loaderElement, positionConfig);
        this.rootElement.appendChild(this.loaderElement);
    }

    removeLoader() {
        if (this.loaderElement) {
            this.rootElement.removeChild(this.loaderElement);
        }
    }

    private applyStylesToElement(element, styles) {
        Object.entries(styles).forEach(entry => this.engine.renderer.setStyle(element, entry[0], entry[1]));
    }

}

