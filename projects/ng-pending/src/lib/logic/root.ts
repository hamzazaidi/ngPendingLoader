import { IEngine } from '../models/engine';
export class Root {
    constructor(
        public rootElement: HTMLElement,
        public engine: IEngine
    ) {}

    applyStyles() {
        this.engine.renderer.setStyle(this.rootElement, 'position', 'relative');
    }

    removeStyles() {
        this.engine.renderer.removeStyle(this.rootElement, 'position');
    }
}
