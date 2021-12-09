import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../../request.service';
/*
import { Request } from '../request.class';
import { Requestline } from '../../requestline/requestline.class';
*/
import { RequestlineService } from 'src/app/misc/requestline/requestline.service';


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
    private router: Router, 

  ) { }

  ngOnInit(): void {
  }

}
