import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User[] = [];

  constructor( private usersvc:UserService) {}

  ngOnInit(): void { 
    this.usersvc.list().subscribe({
      next: res => {
        this.user=res;
        console.log(res);
      }
    })
  }
}
