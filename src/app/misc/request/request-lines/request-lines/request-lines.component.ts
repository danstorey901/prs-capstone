import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../../request.service';
import { RequestlineService } from 'src/app/misc/requestline/requestline.service';
import { Request } from '../../request.class';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request!: Request;

  constructor(
    private sys: SystemService,
    private req: RequestService,
    private reql: RequestlineService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  delete(id: number): void {
    this.reql.remove(id).subscribe({
      next: res => {
        console.debug("Requestline deleted successfully!");
        this.refresh();
        this.router.navigateByUrl(`/requests/lines/${this.request.id}`)
      }
    })
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

  review(): void {
    this.req.review(this.request).subscribe({
      next: res => {
        console.debug("Request reviewed successfully!");
        this.refresh();
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.req.get(id).subscribe({
      next: res => {
        this.request = res;
        console.log(this.request);
      }
    });

  }

}
