import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPendingModule, Loaders, IConfig } from 'ng-pending';
import { AppComponent } from './app.component';
import { BlinkerComponent } from './components/blinker/blinker.component';

const config: IConfig = {
  component: Loaders.bouncingLoader,
  loaderConfig: {
    background: 'maroon'
  },
  overlayConfig: {
    opacity: '0.5'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    BlinkerComponent
  ],
  imports: [
    BrowserModule,
    NgPendingModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
