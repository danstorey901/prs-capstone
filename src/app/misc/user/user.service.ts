import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get(`${"http://localhost:57419/api/users"}`) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(`${"http://localhost:57419/api/users"}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${"http://localhost:57419/api/users"}`, user) as Observable<User>;
  }
  change(user: User): Observable<any> {
    return this.http.put(`${"http://localhost:57419/api/users"}/${user.id}`, user) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${"http://localhost:57419/api/users"}/${id}`) as Observable<any>;
  }
  login(username: string, password: string): Observable<User> {
    return this.http.get(`${"http://localhost:57419/api/users"}/${username}/${password}`) as Observable<User>;
  }
  }
