import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "../services/login.service";
import {StorageKeys} from "../../shared/utils";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loggedInUser = this.loginService.loggedInUser;
    const translateCount = Number(localStorage.getItem(StorageKeys.TRANSLATE_COUNT));
    if(loggedInUser || translateCount <= 3){
      return true;
    } else {
      this.router.navigateByUrl('/registration');
      return false;
    }
  }
}
