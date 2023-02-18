import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const baseUrl= "http://localhost:8181/pd_dept/api"

@Injectable({
  providedIn: 'root'
})

export class PrServiceService {

  constructor(
    private http: HttpClient
  ) { }


  getDeptAllOrder():Observable<any[]>{
    return this.http.get<any[]>(baseUrl+"/get_all_prd");
  }

  prdDelivary(ordId: number){
    return this.http.patch(baseUrl+"/prd_delivary/"+ordId, ordId)
  }

  getAllDeptEmp(deptId:number):Observable<any[]>{
      return this.http.get<any[]>(baseUrl+"/get_emp_bydept/"+deptId)
  }

  getAtiveOrder(orderId: number):Observable<any[]>{
    return this.http.get<any>(baseUrl+"/get_emp_isass/"+orderId)
  }

}
