import { OnDestroy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private router: Router,
    private urs: UserService) { }

    login(): void {
      this.urs.login(this.username, this.password).subscribe({
        next: res => {
          console.debug(`Login successful for username ${this.username}`);
          this.router.navigateByUrl("/requests/list");
        },
        error: err => { 
          if(err.error.status == 404) {
            this.message = "Username/Password not found!";
            return;
          }
          console.debug(err); 
        }
      });
    }
  
    ngOnInit(): void {
      console.debug("ngOnInit()");
    }
    ngOnDestroy(): void {
    }
  
  }
 