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
  @Input() message: string;
  @Input() customConfig: IConfig;
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
    // Setting up the Anchor element to have correct styles for the loader and overlay to work.
    this.root = new Root(this.el.nativeElement, engine);
    this.root.applyStyles();

    // Instantiating the Loader with root Level config or Default config
    this.loader = new Loader(this.el.nativeElement, engine, this.config);

    // Instatiating the over where the loader appear in the middle with root level config or Default config
    this.overlay = new Overlay(this.el.nativeElement, engine, this.config);

  }

  ngOnChanges(changes) {
    if (changes.ngPending) {
      if (changes.ngPending.currentValue) {
        // Adding the loader with config optionally defined on the element otherwise use the root level config or defualt
        this.loader.addLoader(this.customConfig);

        // Adding the Overlay with config optionally defined on the element otherwise use the root level config or defualt
        this.overlay.createOverlay(this.customConfig);
      } else {
        // Removing the Loader
        this.loader.removeLoader();

        // Removing the overlay
        this.overlay.removeOverlay();
      }
    }

    if (changes.message) {
      // Update the message to show next to loader with the config to style message.
      // Config is optionally defined on the element to override the root or default config.
      this.loader.updateMessage(changes.message.currentValue, this.customConfig);
    }
  }

}
