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
    componentFactory: ComponentFactory<BouncingLoaderComponent>;
    componentRef: ComponentRef<BouncingLoaderComponent>;
    styles = [
        { styleName: 'position', styleValue: 'absolute' },
        { styleName: 'left', styleValue: '50%' },
        { styleName: 'top', styleValue: '35%' },
        { styleName: 'z-index', styleValue: '9999' }
    ];
    element: HTMLElement;
    constructor(
        public rootElement: HTMLElement,
        public engine: IEngine,
        public config: IConfig
    ) {
        const loaderComponent = this.config.component ? this.config.component : BouncingLoaderComponent;
        this.componentFactory = this.engine.factoryResolver.resolveComponentFactory(loaderComponent);
    }

    addLoader({ message }) {
        const { background, width, height, ...rest } = { ...this.config.loaderConfig };
        const loaderConfig = { ...defaultLoaderConfig, background, width, height };
        this.componentRef = this.engine.viewContainerRef.createComponent(this.componentFactory);
        this.componentRef.instance.config = loaderConfig;
        const positionConfig = { ...defaultLoaderPositionConfig, ...rest };
        this.element = this.componentRef.location.nativeElement;
        Object.entries(positionConfig).forEach(entry => this.engine.renderer.setStyle(this.element, entry[0], entry[1]));
        this.rootElement.appendChild(this.element);
        if (message) {
            const messageConfig = { ...defaultMessageConfig, ...this.config.messageConfig };
            const messageContainer = this.engine.renderer.createElement('div');
            const messageText = this.engine.renderer.createText(message);
            Object.entries(messageConfig).forEach(entry => this.engine.renderer.setStyle(messageContainer, entry[0], entry[1]));
            this.engine.renderer.appendChild(messageContainer, messageText);
            this.element.appendChild(messageContainer);
        }
    }

    removeLoader() {
        this.rootElement.removeChild(this.element);
    }
}
