import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { MenuComponent } from '../components/menu/menu.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
    declarations: [
        HomeComponent,
        MenuComponent
    ],
    exports: [
        MenuComponent,
        HomeComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    RouterLink
  ]
})
export class CoreModule { }
