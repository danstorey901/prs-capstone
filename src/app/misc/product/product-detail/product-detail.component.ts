import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  verifyDelete: boolean = false;


  constructor(
    private prd: ProductService,
    private route: ActivatedRoute,
    private router: Router
     ) { }

  remove(): void { 
    this.verifyDelete = !this.verifyDelete; 
  }

  verify(): void {
    this.prd.remove(this.product.id).subscribe({
      next: res => {
        console.debug("Product deleted successfully!");
        this.router.navigateByUrl("/products/list");
      }
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.prd.get(id).subscribe({
      next: res => {
        console.log("Product:", res as Product);
        this.product = res as Product;
      }
    })
  }
}