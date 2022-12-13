import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
