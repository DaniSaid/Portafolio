import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import {LoginButtonComponent} from './login-button/login-button.component';
import { ReturnButtonComponent } from './return-button/return-button.component'


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginButtonComponent,
    LoginComponent,
    ReturnButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
