import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  
  request!: Request;
  password!: string;
  passwordCheck!: string;
  

  constructor(
    private sys: SystemService,
    private req: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log("B4", this.request);
    this.req.change(this.request).subscribe({
      next: res => {
        console.log("Request changed successfully!");
        this.router.navigateByUrl("/requests/list");
      },
      error: err => {
        console.error(err);
      }
    }); 
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.req.get(id).subscribe({
      next: res => {
        console.debug("Request:", res);
        this.request = res as Request;
      },
      error: err => {
        console.error(err);
      }
    })
  }

}