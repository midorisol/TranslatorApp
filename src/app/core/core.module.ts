import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        HomeComponent,
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterOutlet,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
