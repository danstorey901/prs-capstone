import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  password!: string;
  passwordCheck!: string;

  constructor(
    private req: RequestService,
    private router: Router
  ) { }


  save(): void {
    console.log("B4", this.request);
    this.req.create(this.request).subscribe({
      next: res => {
        console.log("Request created successfully!");
        this.router.navigateByUrl(`/requests/lines/${res.id}`);
      },
      error: err => {
        console.error(err);
        
      }
    });
    
  }

  ngOnInit(): void {
  }

}
