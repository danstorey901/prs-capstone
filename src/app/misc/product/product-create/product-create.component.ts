import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product ();
  vendors!: Vendor[];
  password!: string;
  passwordCheck!: string;

  constructor(
    private usr: ProductService,
    private vndr: VendorService,
    private router: Router,
    ) { }

    save(): void {
      this.vndr.list().subscribe({
        next: res => {
          console.debug("Vendors:", res);
          this.vendors = res as Vendor[];
        }
      });
      console.log("B4", this.product);
      this.usr.create(this.product).subscribe({
       next: res => {
          console.log("Product created successfully!");
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
    })
  }
}
