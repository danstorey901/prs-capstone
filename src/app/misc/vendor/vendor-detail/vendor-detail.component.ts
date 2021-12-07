import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  pageTitle: string = "Vendor Detail";
  vendor!: Vendor;
  verifyDelete: boolean = false;


  constructor( private router: Router,
    private vndr: VendorService,
    private route: ActivatedRoute, ) { }

      remove(): void { 
    this.verifyDelete = !this.verifyDelete; 
      }

      verify(): void {
        this.vndr.remove(this.vendor.id).subscribe({
          next: res => {
            console.debug("Vendor deleted successfully!");
            this.router.navigateByUrl("/vendors/list");
          }
        })
      }
          //select tag for drop down list
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vndr.get(id).subscribe({
      next: res => {this.vendor = res}
    });
  }
}