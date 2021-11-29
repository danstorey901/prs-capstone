import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  list(): Observable<User[]>{
    return this.http.get( "http://localhost:57419/api/users") as Observable<User[]>;
  }
  }
