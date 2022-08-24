import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './auth/user.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'contract',
    loadChildren: () =>
      import('./contract/contract.module').then((m) => m.ContractModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
