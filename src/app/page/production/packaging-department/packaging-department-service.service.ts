import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const baseUrl= "http://localhost:8181/pd_dept/api"

@Injectable({
  providedIn: 'root'
})
export class PackagingDepartmentServiceService {

  constructor(
    private http: HttpClient
  ) { }


  getDeptAllOrder():Observable<any[]>{
    return this.http.get<any[]>(baseUrl+"/get_all_pkg");
  }

  prdDelivary(ordId: number){
    return this.http.patch(baseUrl+"/pkg_delivary/"+ordId, ordId)
  }

}
