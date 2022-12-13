import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "../../core/services/translate.service";
import {Country} from "../../core/models/country.model";
import {tap} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  contentForm: FormGroup;
  responseText: string;

  constructor(private http: HttpClient, private translateService: TranslateService) {
    this.contentForm = new FormGroup<any>({
      text: new FormControl('', Validators.required),
      source: new FormControl(),
      target: new FormControl('', Validators.required),
      automatic: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.translateService.countryList().pipe(
      tap(country => this.countries = country)
    ).subscribe();
  }

  translate(): void {

    const text = this.contentForm.get('text')?.value;
    const source = this.contentForm.get('source')?.value;
    const target = this.contentForm.get('target')?.value;
    const detectLanguage = this.contentForm.get('automatic')?.value;

    if (detectLanguage) {
      this.autoTranslate(text, target);
    } else {
      this.translateService.translate(text, source, target).pipe(
        tap(translation => this.responseText = translation)
      ).subscribe();
    }
  }

  private autoTranslate(text: string, target: string): void {
    this.translateService.autoTranslate(text, target).pipe(
      tap(translation => this.responseText = translation)
    ).subscribe();
  }

  get detectLanguage(): boolean {
    return this.contentForm.get('automatic')?.value;
  }
}
