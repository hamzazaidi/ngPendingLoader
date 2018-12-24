import {
  Directive,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input,
  ElementRef,
  OnChanges,
  Renderer2,
  Inject
} from '@angular/core';
import { Loader } from '../logic/loader';
import { Overlay } from '../logic/overlay';
import { Root } from '../logic/root';
import { IConfig } from '../models/config';
import { IEngine } from '../models/engine';
import { ConfigService } from '../service/configService';

@Directive({
  selector: '[ngPending]'
})
export class NgPendingDirective implements OnChanges {
  @Input() ngPending: boolean;
  loader: Loader;
  overlay: Overlay;
  root: Root;
  constructor(
    public viewContainerRef: ViewContainerRef,
    public factoryResolver: ComponentFactoryResolver,
    public el: ElementRef,
    public renderer: Renderer2,
    @Inject(ConfigService) public config: IConfig
  ) {
    const engine: IEngine = {
      viewContainerRef,
      factoryResolver,
      renderer
    };

    this.loader = new Loader(this.el.nativeElement, engine, this.config);
    this.overlay = new Overlay(this.el.nativeElement, engine, this.config);
    this.root = new Root(this.el.nativeElement, engine);
    this.root.applyStyles();
  }

  ngOnChanges(changes) {
    if (!changes.ngPending.currentValue && !changes.ngPending.previousValue) { return; }
    if (changes.ngPending.currentValue === changes.ngPending.previousValue) { return; }
    if (changes.ngPending.currentValue) {
      this.loader.addLoader();
      this.overlay.createOverlay();
    } else {
      this.loader.removeLoader();
      this.overlay.removeOverlay();
    }
  }

}
