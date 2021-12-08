import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  password!: string;
  passwordCheck!: string;

  constructor(
    private usr: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  checkPasswords(): void {
    this.passwordCheck = "";
    if(this.user.password !== this.password) {
      this.passwordCheck = "Passwords don't match!";
    }
  }

  save(): void {
    console.log("B4", this.user);
    this.usr.change(this.user).subscribe({
      next: res => {
        console.log("User changed successfully!");
        this.router.navigateByUrl("/users/list");
      },
      error: err => {
        console.error(err);
      }
    }); 
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.usr.get(id).subscribe({
      next: res => {
        console.debug("User:", res);
        this.user = res as User;
      },
      error: err => {
        console.error(err);
      }
    });
}
}
