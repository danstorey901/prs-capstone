import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  constructor(private http: HttpClient) { }

list(): Observable<Requestline[]> {
  return this.http.get(`${"http://localhost:57419/api/requests"}`) as Observable<Requestline[]>;
}

get(id: number): Observable<Requestline> {
  return this.http.get(`${"http://localhost:57419/api/requests"}/${id}`) as Observable<Requestline>;
}

create(user: Requestline): Observable<Requestline> {
  return this.http.post(`${"http://localhost:57419/api/requests"}`, user) as Observable<Requestline>;
}

change(user: Requestline): Observable<any> {
  return this.http.put(`${"http://localhost:57419/api/requests"}/${user.id}`, user) as Observable<any>;
}

remove(id: number): Observable<any> {
  return this.http.delete(`${"http://localhost:57419/api/requests"}/${id}`) as Observable<any>;
}
}
