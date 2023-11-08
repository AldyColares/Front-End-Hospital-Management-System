import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthFormModule } from './auth-form/auth-form.module';
import { LoginModule } from './login/login.module';
import { RegistersModule } from './registers/registers.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthFormModule,
    LoginModule,
    RegistersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
