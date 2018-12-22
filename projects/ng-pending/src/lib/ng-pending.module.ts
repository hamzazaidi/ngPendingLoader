import { NgModule } from '@angular/core';
import { NgPendingDirective } from './directive/ng-pending.directive';
import { BouncingLoaderComponent } from './components/bouncing-loader/bouncing-loader.component';
import { BouncingStringsComponent } from './components/bouncing-strings/bouncing-strings.component';
import { RotatingSquareComponent } from './components/rotating-square/rotating-square.component';
import { ILoaders } from './models/loaders';

export const Loaders: ILoaders = {
  bouncingLoader: BouncingLoaderComponent,
  bouncingString: BouncingStringsComponent,
  rotatingSquare: RotatingSquareComponent
};

@NgModule({
  declarations: [ NgPendingDirective, BouncingLoaderComponent, BouncingStringsComponent, RotatingSquareComponent ],
  entryComponents: [ BouncingLoaderComponent, BouncingStringsComponent, RotatingSquareComponent ],
  imports: [],
  exports: [ NgPendingDirective  ]
})
export class NgPendingModule { }
