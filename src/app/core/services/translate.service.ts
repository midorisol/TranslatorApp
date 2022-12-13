import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Country} from "../models/country.model";
import {map, Observable, switchMap} from "rxjs";
import {StorageKeys} from "../../shared/utils";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private _baseUrl = `${environment.baseUrl}`;


  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  countryList(){
    return this.http.get<Country[]>(`${this._baseUrl}/languages`)
  }

  translate(text: string, source: string, target: string): Observable<string> {
    let translateCount = Number(localStorage.getItem(StorageKeys.TRANSLATE_COUNT));
    translateCount++;
    localStorage.setItem(StorageKeys.TRANSLATE_COUNT, translateCount.toString());
    const loggedInUser = this.loginService.loggedInUser;
    if (!loggedInUser && translateCount > 3) {
      this.router.navigateByUrl('/registration');
      this.snackBar.open('Please register you have used your three translations!', 'OK', {duration: 5000})
    }

    const formData = new FormData();
    formData.append("q", text);
    formData.append("source", source);
    formData.append("target", target);
    formData.append("format", "text");
    return this.http.post(`${this._baseUrl}/translate`, formData).pipe(
      map((result: any) => result.translatedText)
    )
  }

  autoTranslate(text: string, target: string): Observable<any> {
    const formData = new FormData();
    formData.append("q", text);
    return this.http.post(`${this._baseUrl}/detect`, formData).pipe(
      map((detectedLang: any) => detectedLang[0].language),
      switchMap(detectedLang => this.translate(text, detectedLang, target))
    );
  }
}

