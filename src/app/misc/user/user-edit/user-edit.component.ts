import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  constructor() { }

  save(): void {}

  ngOnInit(): void {
  }

}
