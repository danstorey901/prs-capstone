import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

    pageTitle: string = "Vendor Create";
    vendor: Vendor = new Vendor();
    name!: string;
    nameCheck!: string;
  
    constructor(private vndr: VendorService, private router: Router) { }
  
    checkNames(): void {
      this.nameCheck = "";
      if(this.vendor.name !== this.name) {
        this.nameCheck = "Name already exists!";
      }
    }
  
    save(): void {
      console.log("B4", this.vendor);
      this.vndr.create(this.vendor).subscribe({
        next: res => {
          console.log("Vendor created successfully!");
          this.router.navigateByUrl("/vendors/list");
        },
        error: err => {
          console.error(err);
  
        }
      });
    }
    
  
    ngOnInit(): void {
    }
  
  }