import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private prd: ProductService) { }

  ngOnInit(): void {
    this.prd.list().subscribe({
      next: res => {
        console.debug("Products:", res);
        this.products = res as Product[];
      },
      error: err => {
        console.error(err);
      }
    });
  }
}