import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryListModel } from '../country-list/country-list-model.model';
import { ClientRegForm } from './client-reg-form.model';

@Injectable({
  providedIn: 'root'
})
export class ClientRegFormService {

  constructor(private http : HttpClient) { }

  baseUrl = "http://localhost:8181/client/api";

  getAllClient(): Observable<ClientRegForm[]>{
    return this.http.get<ClientRegForm[]>(this.baseUrl+"/all_client");
  }

  //Country geting from other component
  getAllCountry(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+"/all_country");
  }

  // file: File;
  createClient(clientModel: ClientRegForm){
    return this.http.post(this.baseUrl+"/save_client", clientModel);
  }

  uploadImg(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(this.baseUrl+"/uploadImg", formData);
  }

  getImageByName(imgName: string):Observable<any>{
    return this.http.get<any>(this.baseUrl+"/get_img/"+imgName)
  }

  findAllImg():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+"/get_img");
  }


}
