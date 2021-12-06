import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  pageTitle: string = "User Detail";
  user!: User;
  verifyDelete: boolean = false;


  constructor( private router: Router,
    private usr: UserService,
    private route: ActivatedRoute, ) { }

      remove(): void { 
    this.verifyDelete = !this.verifyDelete; 
      }

      verify(): void {
        this.usr.remove(this.user.id).subscribe({
          next: res => {
            console.debug("User deleted successfully!");
            this.router.navigateByUrl("/users/list");
          }
        })
      }
          
  ngOnInit(): void {
  }
}