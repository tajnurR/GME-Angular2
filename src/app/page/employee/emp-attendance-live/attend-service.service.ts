import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = "http://localhost:8181/emp/api"

@Injectable({
  providedIn: 'root'
})
export class AttendServiceService {

  constructor(
      private http: HttpClient
  ) { }

  setattden(empId:string):Observable<any>{
    return this.http.get<any>(baseUrl+"/attend/"+empId)
  }
}
