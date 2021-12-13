import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from 'src/app/misc/requestline/requestline.service';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../../request.service';
import { Request } from '../../request.class';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  request!: Request;

  constructor(
    private sys: SystemService,
    private req: RequestService,
    private reql: RequestlineService,
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  approve(request: Request): void {
    request.rejectionReason = "";
    this.req.approve(request).subscribe({
      next: req => {
        console.debug("Request approved successfully!");
        this.refresh();
      }
    });
  }
  showRejection: boolean = false;
  showRejectionReason(): void {
    this.showRejection = !this.showRejection;
  }
  reject(request: Request): void {
    this.req.reject(request).subscribe({
      next: req => {
        console.debug("Request rejected successfully!");
        this.refresh();
      }
    });
  }

  refresh(): void {
    let id = +this.route.snapshot.params["id"];
    this.req.get(id).subscribe({
      next: res => {
        console.debug("Request:", res as Request);
        this.request = res as Request;
      },
      error: err => {
        console.error("Trap error:", err);
      }
    });
  }

  review(request: Request): void {
    this.req.review(request).subscribe({
      next: res => {
        console.debug("Request reviewed successfully!");
        this.refresh();
      }
    })
  }

  ngOnInit(): void {
    this.refresh();
  }


}
