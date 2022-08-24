import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from '../auth/user.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { AdminProfilComponent } from './admin-profil/admin-profil.component';
import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent },
{ path: 'shwo-profile', component: ShowProfileComponent },
{ path: 'admin-profil', component: AdminProfilComponent },
{ path: 'edit-profile/:id', component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
