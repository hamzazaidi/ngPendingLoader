import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgPendingDirective } from './directive/ng-pending.directive';
import { BouncingLoaderComponent } from './components/bouncing-loader/bouncing-loader.component';
import { BouncingStringsComponent } from './components/bouncing-strings/bouncing-strings.component';
import { RotatingSquareComponent } from './components/rotating-square/rotating-square.component';
import { ILoaders } from './models/loaders';
import { IConfig } from './models/config';

export const Loaders: ILoaders = {
  bouncingLoader: BouncingLoaderComponent,
  bouncingString: BouncingStringsComponent,
  rotatingSquare: RotatingSquareComponent
};

//export const ConfigService = new InjectionToken<IConfig>('Config');

@NgModule({
  declarations: [ NgPendingDirective, BouncingLoaderComponent, BouncingStringsComponent, RotatingSquareComponent ],
  entryComponents: [ BouncingLoaderComponent, BouncingStringsComponent, RotatingSquareComponent ],
  imports: [],
  exports: [ NgPendingDirective  ]
})
export class NgPendingModule {
  // static forRoot(config: IConfig): ModuleWithProviders {
  //   return {
  //     ngModule: NgPendingModule,
  //     providers: [
  //       {
  //         provide: ConfigService,
  //         useValue: config
  //       }
  //     ]
  //   };
  // }
}
