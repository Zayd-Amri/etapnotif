import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import{HomeComponent} from '../home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent,LoginComponent, SignInComponent, ForgetPasswordComponent, RegisterComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [LoginComponent,RegisterComponent]
})
export class LoginModule { }
