import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryListModel} from "./country-list-model.model";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CountryListServiceService {

  constructor( private http: HttpClient ) { }

  baseUrl = "http://localhost:8181/client/api";

  getAllCountry(): Observable<CountryListModel[]>{
    return this.http.get<CountryListModel[]>(this.baseUrl+"/all_country");
  }

  createCountry(countryM: CountryListModel){
    return this.http.post(this.baseUrl+"/save_country", countryM);
  }

}
