import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule, NgForm } from '@angular/forms';

import { RouterModule } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgxPrintModule } from 'ngx-print';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SharedModule } from './shared/shared.module';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { Constants } from './config/constant';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgxPrintModule,
    SharedModule,
    LoginModule
    
  ],
  providers: [
    authInterceptorProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    Constants,
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
