import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {StorageKeys} from "../../shared/utils";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _loggedInUser: User | undefined;
  isLoggedIn = new Subject<boolean>();

  constructor(private router: Router) {
    const user = localStorage.getItem(StorageKeys.USER);

    if(user){
      this._loggedInUser = JSON.parse(user);
    }
  }

  get loggedInUser() {
    return this._loggedInUser;
  }

  login(username:any) {
    this._loggedInUser = new User(username);
    this.isLoggedIn.next(true);

    localStorage.setItem(StorageKeys.USER, JSON.stringify(this.loggedInUser));
    this.router.navigateByUrl('');
  }

  logout() {
    this._loggedInUser = undefined;
    this.isLoggedIn.next(false);
    localStorage.removeItem(StorageKeys.USER);
    this.router.navigateByUrl('/registration')
  }
}
