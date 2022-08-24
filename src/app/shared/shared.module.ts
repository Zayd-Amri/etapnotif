import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, ForbiddenComponent, SidebarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [HeaderComponent,FooterComponent,ForbiddenComponent,SidebarComponent]
})
export class SharedModule { }
