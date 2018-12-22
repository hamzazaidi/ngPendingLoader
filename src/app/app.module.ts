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
    NgPendingModule.forRoot({ color: 'red', component: Loaders.bouncingString })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
