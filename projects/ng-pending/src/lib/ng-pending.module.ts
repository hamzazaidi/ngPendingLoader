import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPendingDirective } from './directive/ng-pending.directive';
import { BouncingLoaderComponent } from './components/bouncing-loader/bouncing-loader.component';
import { BouncingStringsComponent } from './components/bouncing-strings/bouncing-strings.component';
import { BlinkingDotsComponent } from './components/blinking-dots/blinking-dots.component';
import { ConfigService } from './service/configService';
import { ILoaders } from './models/loaders';
import { IConfig } from './models/config';
export { ILoaderConfig } from './models/loaderConfig';
export { IOverlayConfig } from './models/overlayConfig';
export { IConfig } from './models/config';

export const Loaders: ILoaders = {
  bouncingLoader: BouncingLoaderComponent,
  bouncingString: BouncingStringsComponent,
  blinkingDots: BlinkingDotsComponent,

};

const initialConfig = {};

const components: any[] = [
  BouncingLoaderComponent, BouncingStringsComponent, BlinkingDotsComponent
];

@NgModule({
  declarations: [ NgPendingDirective, ...components ],
  entryComponents: [ ...components ],
  imports: [ CommonModule ],
  exports: [ NgPendingDirective  ]
})
export class NgPendingModule {
  static forRoot(config: IConfig = initialConfig): ModuleWithProviders {
    return {
      ngModule: NgPendingModule,
      providers: [
        {
          provide: ConfigService,
          useValue: config
        }
      ]
    };
  }
}

