import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor!: Vendor;
  password!: string;
  passwordCheck!: string;

  constructor(
    private vndr: VendorService,
    private route: ActivatedRoute,
    private router: Router
    
    ) { }

 /* checkNames(): void {
    this.nameCheck = "";
    if(this.vendor.name !== this.name) {
      this.nameCheck = "Name already exists!";
    }
  }*/

  save(): void {
    console.log("B4", this.vendor);
    this.vndr.change(this.vendor).subscribe({
      next: res => {
        console.log("Vendor changed successfully!");
        this.router.navigateByUrl("/vendors/list");
      },
      error: err => {
        console.error(err);

      }
    });
  }

    ngOnInit(): void {
      let id = +this.route.snapshot.params["id"];
      this.vndr.get(id).subscribe({
        next: res => {
          console.debug("Vendor:", res);
          this.vendor = res as Vendor;
        },
        error: err => {
          console.error(err);
        }
      });
    }
  }