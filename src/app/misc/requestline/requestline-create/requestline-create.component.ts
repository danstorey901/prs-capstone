import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();
  products!: Product[];
  password!: string;
  passwordCheck!: string;

  constructor(
    private sys: SystemService,
    private reql: RequestlineService,
    private prd: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  save(): void {
    this.requestline.productId = +this.requestline.productId;
    console.debug("B4", this.requestline);
    this.reql.create(this.requestline).subscribe({
      next: res => {
        console.debug("Requestline created successfully!");
        this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
      },
      error: err => {
        console.error(err);
      }
    }); 
  }


  ngOnInit(): void {
    this.prd.list().subscribe({
      next: res => {
        console.debug("Products:", res);
        this.products = res as Product[];
      }
    });
    // wait what exactly does this do??  rid?
    this.requestline.requestId = +this.route.snapshot.params["rid"];
  }

}
