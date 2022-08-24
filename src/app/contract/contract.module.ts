import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContractRoutingModule } from './contract-routing.module';
import { AddComponent } from './add/add.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowOneComponent } from './show-one/show-one.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddComponent,
    ShowListComponent,
    ShowOneComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ContractModule { }
