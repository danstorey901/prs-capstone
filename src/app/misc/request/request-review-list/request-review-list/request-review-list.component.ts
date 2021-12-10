import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../../request.service';
import { Request } from '../../request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request[] = [];

  constructor(
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router,
    private req: RequestService
  ) { }

  approve(request: Request): void {
    this.req.approve(request).subscribe({
      next: res => {
        console.debug("Request approved successfully!");
        this.router.navigateByUrl(`/request/reviews`);
      }
    });
  }
  reject(request: Request): void {
    this.req.reject(request).subscribe({
      next: res => {
        console.debug("Request rejected successfully!");
        this.router.navigateByUrl(`/request/reviews`);
      }
    });
  }

  refresh(): void {
    this.req.reviews(this.sys.loggedinuser.id).subscribe({
      next: res => {
        console.debug("Requests in review:", res);
        this.requests = res as Request[];
      },
      error: err => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    if(this.sys.loggedinuser == null){
      this.router.navigateByUrl("/users/login")
    }
    this.refresh();
  }

}
