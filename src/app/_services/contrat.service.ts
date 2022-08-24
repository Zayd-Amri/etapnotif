import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Constants } from '../config/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  addHttpOption = {
    headers: new HttpHeaders ({
      'Content-type': 'application/json'
    })}
  constructor(private client:HttpClient , private config:Constants) { }

  getAllContracts(): Observable<any[]>{
    return this.client.get<any>(this.config.API_ENDPOINT + 'contracts/getall')
  }

  addContract(chequier : any){
    return this.client.post(this.config.API_ENDPOINT + 'contract/add' , chequier )
  }

  getById(chequierId : any){
    return this.client.get(this.config.API_ENDPOINT + 'contract/get/'+ chequierId)
  }
  /*disbaleChequier(chequierId : any){
    return this.client.get(this.config.API_ENDPOINT + 'chequier/disable/'+ chequierId)
  }
  enableChequier(chequierId : any){
    return this.client.get(this.config.API_ENDPOINT + 'chequier/enable/'+ chequierId)
  }
*/

  updateContract(carte : any){
    return this.client.post(this.config.API_ENDPOINT + 'contract/update/', carte )
  }
  deleteContract(carte : any){
    return this.client.post(this.config.API_ENDPOINT + 'contract/update/' , carte)
  }
}
