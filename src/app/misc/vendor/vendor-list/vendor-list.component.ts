import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendor: Vendor[] = [];

  constructor( private vendorsvc:VendorService) {}

  ngOnInit(): void { 
    this.vendorsvc.list().subscribe({
      next: res => {
        this.vendor=res;
        console.log(res);
      }
    })
  }
}