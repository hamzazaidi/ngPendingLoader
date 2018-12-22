import { IEngine } from '../models/engine';
export class Root {
    styles = [
        { styleName: 'position', styleValue: 'relative' }
    ];
    constructor(
        public rootElement: HTMLElement,
        public engine: IEngine
    ) {}

    applyStyles() {
        this.styles.forEach(s => this.engine.renderer.setStyle(this.rootElement, s.styleName, s.styleValue));
    }

    removeStyles() {
        this.styles.forEach(s => this.engine.renderer.removeStyle(this.rootElement, s.styleName));
    }
}
