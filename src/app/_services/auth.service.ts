import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../config/constant';

 let AUTH_API = '';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient , private config : Constants) {
    AUTH_API = config.API_ENDPOINT + '/api/auth/'
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.config.API_ENDPOINT + 'api/auth/signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, roles:string): Observable<any> {
    var role:any[]= [];
    console.log(roles);
    role.push(roles);
    return this.http.post(this.config.API_ENDPOINT + 'api/auth/signup', {
      username,
      email,
      password,
      role,
    }, httpOptions);
  }
}
