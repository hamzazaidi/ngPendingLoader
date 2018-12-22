import { ViewContainerRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';
export interface IEngine {
    viewContainerRef: ViewContainerRef;
    factoryResolver: ComponentFactoryResolver;
    renderer: Renderer2;
}
