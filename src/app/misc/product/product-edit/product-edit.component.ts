import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product ();
  vendors!: Vendor[];
  password!: string;
  passwordCheck!: string;

  constructor(
    private prd: ProductService,
    private vndr: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    console.log("B4", this.product);
    this.prd.change(this.product).subscribe({
      next: res => {
        console.log("Product changed successfully!");
        this.router.navigateByUrl("/products/list");
      },
      error: err => {
        console.error(err);
      }
    }); 
  }


  ngOnInit(): void {
    this.vndr.list().subscribe({
      next: res => {
        console.debug("Vendors:", this.vendors);
        this.vendors = res as Vendor[];
      }
    });
    let id = +this.route.snapshot.params["id"];
    this.prd.get(id).subscribe({
      next: res => {
        console.debug("Product:", res);
        this.product = res as Product;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}