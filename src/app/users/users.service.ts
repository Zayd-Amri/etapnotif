import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser() : Observable<User>{
    return this.http.get<User>(apiUrl+'users');
  }

  getUserByEmail(email) : Observable<User>{
    return this.http.get<User>(apiUrl+'users?email=' + email);
  }

  addUser(user) : Observable<User>{
    return this.http.post<User>('http://127.0.0.1:8000/register', user);
  }

  updateUser(user, userId) : Observable<User>{
    const userUrl = apiUrl + 'users/' + userId;
    return this.http.put<User>(userUrl , user);
  }

  viewUser(userId: number) : Observable<User>{
    const userUrl = apiUrl + 'user/find/' + userId;
    return this.http.get<User>(userUrl);
  }

  deleteUser(userId) : Observable<User>{
    const userUrl = apiUrl + 'users/' + userId;
    return this.http.delete<User>(userUrl);
  }

  getAll() : Observable<User[]>{
    const userUrl = apiUrl + 'user/all';
    return this.http.get<User[]>('http://localhost:8082/api/user/all');
  }
}
