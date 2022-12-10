import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "../translate.service";
import {Country} from "../models/country.model";
import {ResponseText} from "../models/translatedtext.model";
import {AutomaticTranslate} from "../models/automatic.model";
import {switchMap, tap} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  country: Country[] = [];
  contentForm: FormGroup;



  constructor(private http: HttpClient, private translateService: TranslateService) {
    this.contentForm = new FormGroup<any>({
      q: new FormControl(),
      source: new FormControl(),
      target: new FormControl(),
      automatic: new FormControl(),
    })
  }

responseText?: ResponseText;
  automaticTranslate?: AutomaticTranslate;
  ngOnInit(): void {
    this.countryListing();
  }

  translate() {
      this.getTranslation().subscribe(
        (response) => {
          this.responseText = <ResponseText>response;
          console.log(response)
        }
      )
    }

    private getTranslation() {
      const formData = new FormData();
      formData.append("q", this.contentForm.get('q')?.value);
      formData.append("source", this.contentForm.get('source')?.value);
      formData.append("target", this.contentForm.get('target')?.value);
      formData.append("format", "text");
      return this.http.post('https://libretranslate.de/translate',
        formData)
    }

  private getTranslation2() {
    const formData2 = new FormData();
    formData2.append("q", this.contentForm.get('q')?.value);
    formData2.append("source", this.automaticTranslate!.language);
    formData2.append("target", this.contentForm.get('target')?.value);
    formData2.append("format", "text");
    return this.http.post('https://libretranslate.de/translate',
      formData2)
  }


  autoTranslate(){
    const formData1 = new FormData();
    formData1.append("q", this.contentForm.get('q')?.value);
    this.http.post('https://libretranslate.de/detect',
      formData1).pipe(
        tap(res => {
          this.automaticTranslate = <AutomaticTranslate>res
        }),
      switchMap(() => this.getTranslation2())
    ).subscribe((response) => {
        this.responseText = <ResponseText>response;
        console.log(response)
      }
    )}



  countryListing(){
    this.translateService.countryList().subscribe(country =>this.country = country)
  }

}
