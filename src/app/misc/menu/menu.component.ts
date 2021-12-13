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
    new Menu("Users", "/users/list"),
    new Menu("Vendors", "/vendors/list"),
    new Menu("Products", "/products/list"),
    new Menu("Requests", "/requests/list"),
    new Menu("Reviews", "/requests/reviews"),
    new Menu("About", "/about"),
    new Menu("Login", "/users/login"),
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
// variable menus - type menu array - instances of menu new menu (display what user sees, route) list route/users/list  (x3 sep com)