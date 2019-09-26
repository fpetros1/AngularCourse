import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1 } from './components/component-1/component-1.component';
import { PrintDirective } from './directives/print.directive';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    PrintDirective
  ],
  imports: [
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
