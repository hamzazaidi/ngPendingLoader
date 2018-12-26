import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPendingModule, Loaders, IConfig } from 'ng-pending';
import { AppComponent } from './app.component';
import { BlinkerComponent } from './components/blinker/blinker.component';
import { HeaderComponent } from './components/header/header.component';

const config: IConfig = {
  component: Loaders.blinkingDots,
  loaderConfig: {
    background: '#fff'
  },
  overlayConfig: {
    background: '#000',
    opacity: '0.5'
  },
  messageConfig: {
    color: '#fff',
    'font-size': '20px'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    BlinkerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgPendingModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
