import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../core/services/login.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLoggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.isLoggedIn.pipe(
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    ).subscribe();
  }

  logout(){
    this.loginService.logout()
  }

}
