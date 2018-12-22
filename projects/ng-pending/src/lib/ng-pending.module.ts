import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPendingDirective } from './directive/ng-pending.directive';
import { BouncingLoaderComponent } from './components/bouncing-loader/bouncing-loader.component';
import { BouncingStringsComponent } from './components/bouncing-strings/bouncing-strings.component';
import { RotatingSquareComponent } from './components/rotating-square/rotating-square.component';
import { ConfigService } from './service/configService';
import { ILoaders } from './models/loaders';
import { IConfig } from './models/config';

export const Loaders: ILoaders = {
  bouncingLoader: BouncingLoaderComponent,
  bouncingString: BouncingStringsComponent,
  rotatingSquare: RotatingSquareComponent
};


@NgModule({
  declarations: [ NgPendingDirective, BouncingLoaderComponent, BouncingStringsComponent, RotatingSquareComponent ],
  entryComponents: [ BouncingLoaderComponent, BouncingStringsComponent, RotatingSquareComponent ],
  imports: [ CommonModule ],
  exports: [ NgPendingDirective  ]
})
export class NgPendingModule {
  static forRoot(config: IConfig): ModuleWithProviders {
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
