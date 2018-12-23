import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPendingModule, Loaders } from 'ng-pending';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPendingModule.forRoot({ color: '#0070d2', component: Loaders.rotatingSquare })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
