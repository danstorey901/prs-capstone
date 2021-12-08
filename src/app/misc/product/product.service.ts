import { HttpClient } from '@angular/common/http';
import { ApplicationInitStatus, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient) { }

list(): Observable<Product[]> {
  return this.http.get(`${"http://localhost:57419/api/products"}`) as Observable<Product[]>;
}
get(id: number): Observable<Product> {
  return this.http.get(`${"http://localhost:57419/api/products"}/${id}`) as Observable<Product>;
}
create(user: Product): Observable<Product> {
  return this.http.post(`${"http://localhost:57419/api/products"}`, user) as Observable<Product>;
}
change(user: Product): Observable<any> {
  return this.http.put(`${"http://localhost:57419/api/products"}/${user.id}`, user) as Observable<any>;
}
remove(id: number): Observable<any> {
  return this.http.delete(`${"http://localhost:57419/api/products"}/${id}`) as Observable<any>;
}
}
