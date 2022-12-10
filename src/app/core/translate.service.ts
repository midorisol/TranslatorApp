import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Country} from "./models/country.model";
import {AutomaticTranslate} from "./models/automatic.model";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private _baseUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }


  countryList(){
    return this.http.get<Country[]>(`${this._baseUrl}/languages`)
  }

  AutomaticTranslate(language: AutomaticTranslate){
    return this.http.post<AutomaticTranslate>(`${this._baseUrl}/detect`,{language})
  }
}

