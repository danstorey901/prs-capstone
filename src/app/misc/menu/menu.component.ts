import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/misc/user/user.class';
import { Menu } from './menu.class';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  /*get name() {
    return this.sys.getLoggedInUser()?.username;
  }  method for getting who is logged in and displaying username - gets name/returns username
  */

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Users", "user/list"),
    new Menu("Vendors", "vendor/list"),
    new Menu("Products", "product/list"),
    new Menu("Requests", "request/list"),
    new Menu("About", "/about"),
    new Menu("Login", "/users/login"),
    new Menu("Change Password", "/users/passwordchange")
  ];

  constructor(
    /*private sys: SystemService   this is the constructor to enable the method to display username*/ ) { }

  ngOnInit(): void {
  }

}
// variable menus - type menu array - instances of menu new menu (display what user sees, route) list route/users/list  (x3 sep com)