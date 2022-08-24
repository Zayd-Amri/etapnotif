import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/_services/contrat.service';
import{TokenStorageService} from'../../_services/token-storage.service'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  user_id:number;
  success: boolean = false;
  error: boolean = false;
  constructor(
    private contractService:ContratService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.user_id=this.tokenStorage.getUser().id;
  console.log(this.user_id);
  }
addContract():void
{
  
  let contract = {
    name: this.name,
    description: this.description,
    startDate: this.startDate,
    dueDate: this.dueDate,
    "user":{
      "id":this.user_id
    },
    "supplier":{
      "id":this.user_id
    },
  };
  this.contractService.addContract(contract).subscribe(
    res =>this.success = true, error=> this.error = true)
  
}
}
