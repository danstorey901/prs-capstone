import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request!: Request;
  
  verifyDelete: boolean = false;

  constructor(
    private req: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void { 
    this.verifyDelete = !this.verifyDelete; 
  }

  verify(): void {
    this.req.remove(this.request.id).subscribe({
      next: res => {
        console.debug("Request deleted successfully!");
        this.router.navigateByUrl("/requests/list");
      }
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.req.get(id).subscribe({
      next: res => {
        console.log("Request:", res as Request);
        this.request = res as Request;
      },
      error: err => {
        console.error("Trap error:", err);

        
      }
    })
  }

}