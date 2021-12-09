import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  
  list(): Observable<Request[]> {
    return this.http.get(`${"http://localhost:57419/api/requests"}`) as Observable<Request[]>;
  }

  get(id: number): Observable<Request> {
    return this.http.get(`${"http://localhost:57419/api/requests"}/${id}`) as Observable<Request>;
  }
 
  create(request: Request): Observable<Request> {
    return this.http.post(`${"http://localhost:57419/api/requests"}`, request) as Observable<Request>;
  }

  change(request: Request): Observable<any> {
    return this.http.put(`${"http://localhost:57419/api/requests"}/${request.id}`, request) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${"http://localhost:57419/api/requests"}/${id}`) as Observable<any>;
  }
  // new methods

  review(request: Request): Observable<any> {
    return this.http.put(`${"http://localhost:57419/api/requests"}/review/${request.id}`, request) as Observable<any>;
  }

  approve(request: Request): Observable<any> {
    return this.http.put(`${"http://localhost:57419/api/requests"}/review/${request.id}`, request) as Observable<any>;
  }

  reject(request: Request): Observable<any> {
    return this.http.put(`${"http://localhost:57419/api/requests"}/review/${request.id}`, request) as Observable<any>;
  }

}

