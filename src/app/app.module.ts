import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPendingModule } from 'ng-pending';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPendingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
