import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {countryList} from "../country-list";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contentForm: FormGroup;
  countryList = countryList;


  constructor() {
    this.contentForm = new FormGroup<any>({
      translatedText: new FormControl(),
      country: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  submitted() {
    console.log(this.contentForm.value);
  }

}
