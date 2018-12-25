import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPendingDirective } from './directive/ng-pending.directive';
import { BouncingLoaderComponent } from './components/bouncing-loader/bouncing-loader.component';
import { BouncingStringsComponent } from './components/bouncing-strings/bouncing-strings.component';
import { RotatingSquareComponent } from './components/rotating-square/rotating-square.component';
import { FoldingSquaresComponent } from './components/folding-squares/folding-squares.component';
import { ConfigService } from './service/configService';
import { manageEntryComponentsOfModule } from './logic/manageEntryComponents';
import { ILoaders } from './models/loaders';
import { IConfig } from './models/config';
export { ILoaderConfig } from './models/loaderConfig';
export { IOverlayConfig } from './models/overlayConfig';
export { IConfig } from './models/config';

export const Loaders: ILoaders = {
  bouncingLoader: BouncingLoaderComponent,
  bouncingString: BouncingStringsComponent,
  rotatingSquare: RotatingSquareComponent,
  foldingSquares: FoldingSquaresComponent
};

const initialConfig = {};

@NgModule({
  declarations: [ NgPendingDirective, BouncingLoaderComponent, BouncingStringsComponent, RotatingSquareComponent, FoldingSquaresComponent ],
  entryComponents: [ BouncingLoaderComponent, BouncingStringsComponent, RotatingSquareComponent, FoldingSquaresComponent ],
  imports: [ CommonModule ],
  exports: [ NgPendingDirective  ]
})
export class NgPendingModule {
  static forRoot(config: IConfig = initialConfig): ModuleWithProviders {
    if (config.component) { manageEntryComponentsOfModule(NgPendingModule, config.component); }
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

