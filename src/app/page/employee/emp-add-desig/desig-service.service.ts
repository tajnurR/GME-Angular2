import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Designation } from 'src/app/model/employees/designation.model';
import { Observable } from 'rxjs/internal/Observable';
const baseUrl = "http://localhost:8181/emp/api"

@Injectable({
  providedIn: 'root'
})
export class DesigServiceService {

  constructor(
    private http: HttpClient
  ) { }


  createNewDesig(desig: any){
    return this.http.post(baseUrl+"/savedesig", desig);
  }
  getALlDept(): Observable<Designation[]> {
    return this.http.get<Designation[]>(baseUrl + "/allDesig");
  }
}
