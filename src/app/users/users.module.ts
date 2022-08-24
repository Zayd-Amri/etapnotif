import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminProfilComponent } from './admin-profil/admin-profil.component';
import { LoginModule } from '../login/login.module';




@NgModule({
  declarations: [UsersComponent, ShowProfileComponent, EditProfileComponent, AdminProfilComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LoginModule

  ]
})
export class UsersModule { }
