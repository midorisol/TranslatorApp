import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../core/services/login.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  contentForm: FormGroup;
  name: string ='';


  constructor(private loginService: LoginService) {
    this.contentForm = new FormGroup<any>({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telnumber: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  login(){
    if(this.name){
      this.loginService.login(this.name)
    }
  }

}
