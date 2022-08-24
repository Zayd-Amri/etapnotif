import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private httpClientExtern: HttpClient;


  constructor(private httpclient:HttpClient,private httpBackend:HttpBackend) {
    this.httpClientExtern=  new HttpClient(this.httpBackend);
  }

}
