import { Injectable } from '@angular/core';
import { User } from '../misc/user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedinuser: any = null;

  constructor() { }
}
