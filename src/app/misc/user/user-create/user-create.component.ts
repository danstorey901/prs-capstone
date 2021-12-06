import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pageTitle: string = "User Create";
  user: User = new User();
  password!: string;
  passwordCheck!: string;

  constructor(private usr: UserService, private router: Router) { }

  checkPasswords(): void {
    this.passwordCheck = "";
    if(this.user.password !== this.password) {
      this.passwordCheck = "Passwords do not match!";
    }
  }

  save(): void {
    console.log("B4", this.user);
    this.usr.create(this.user).subscribe(
      res => {
        console.log("User created successfully!");
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error(err);

      }
    )
  }
  

  ngOnInit(): void {
  }

}