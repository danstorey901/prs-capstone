import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  list(): Observable<Vendor[]> {
    return this.http.get(`${"http://localhost:57419/api/vendors"}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${"http://localhost:57419/api/vendors"}/${id}`) as Observable<Vendor>;
  }
  create(vendor: Vendor): Observable<Vendor> {    // wants to change the spelling from vendor to Vendors and change id to static any inside vendor.class???
    return this.http.post(`${"http://localhost:57419/api/vendors"}`, vendor) as Observable<Vendor>;
  }
  change(vendor: Vendor): Observable<any> {
    return this.http.put(`${"http://localhost:57419/api/vendors"}/${vendor.id}`, vendor) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${"http://localhost:57419/api/vendors"}/${id}`) as Observable<any>;
  }

  ngOnInit(): void {
  }

}
