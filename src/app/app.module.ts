import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Component1 } from './components/component-1/component-1.component';
import { PrintDirective } from './directives/print.directive';
import { ComponentNotification } from './components/component-notification/component-notification.component';
import { NotificationService } from './services/notification.service';
import ptBr from '@angular/common/locales/br';
import { registerLocaleData, CommonModule } from '@angular/common';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    PrintDirective,
    ComponentNotification,
    ArrayToStringPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NotificationService,
    ArrayToStringPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
