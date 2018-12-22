import { ComponentFactory, ComponentRef } from '@angular/core';
import { BouncingLoaderComponent } from '../components/bouncing-loader/bouncing-loader.component';
import { IEngine } from '../models/engine';
import { IConfig } from '../models/config';
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

    addLoader() {
        this.componentRef = this.engine.viewContainerRef.createComponent(this.componentFactory);
        this.componentRef.instance.color = this.config.color;
        this.element = this.componentRef.location.nativeElement;
        this.styles.forEach(s => this.engine.renderer.setStyle(this.element, s.styleName, s.styleValue));
        this.rootElement.appendChild(this.element);
    }

    removeLoader() {
        this.rootElement.removeChild(this.element);
    }
}
