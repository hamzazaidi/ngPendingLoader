import { IEngine } from '../models/engine';
import { IConfig } from '../models/config';
export class Overlay {
    styles = [
        { styleName: 'position', styleValue: 'absolute' },
        { styleName: 'top', styleValue: '0' },
        { styleName: 'left', styleValue: '0' },
        { styleName: 'width', styleValue: '100%' },
        { styleName: 'height', styleValue: '100%' },
        { styleName: 'background', styleValue: '#fff' },
        { styleName: 'opacity', styleValue: '0.7' },
    ];
    element: HTMLElement;
    constructor(
        public rootElement: HTMLElement,
        public engine: IEngine,
        public config: IConfig
    ) {}
    createOverlay() {
        this.element = this.engine.renderer.createElement('div');
        this.styles.forEach(s => this.engine.renderer.setStyle(this.element, s.styleName, s.styleValue));
        this.rootElement.appendChild(this.element);
    }

    removeOverlay() {
        this.rootElement.removeChild(this.element);
}

}
