import { IEngine } from '../models/engine';
import { IConfig } from '../models/config';

const defaultStyles = {
    background: '#fff',
    opacity: '0,7',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
};

export class Overlay {
    element: HTMLElement;
    constructor(
        public rootElement: HTMLElement,
        public engine: IEngine,
        public config: IConfig
    ) {}
    createOverlay() {
        let styles = Object.assign({}, defaultStyles);
        if (this.config.overlayConfig) {
            styles = Object.assign({}, styles, this.config.overlayConfig);
        }
        this.element = this.engine.renderer.createElement('div');
        Object.entries(styles).forEach(entry => this.engine.renderer.setStyle(this.element, entry[0], entry[1]));
        this.rootElement.appendChild(this.element);
    }

    removeOverlay() {
        if (this.element) {
            this.rootElement.removeChild(this.element);
        }
    }

}
