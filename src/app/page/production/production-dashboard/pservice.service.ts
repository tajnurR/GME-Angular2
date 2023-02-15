import { Injectable } from '@angular/core';
import {HttpClient, } from "@angular/common/http";
import {Observable} from "rxjs";
const baseUrl = 'http://localhost:8181/pd_line/api';

import {Order} from "./pboard.model";
import {ApiRespons} from "../../../model/employees/api-respons";



@Injectable({
  providedIn: 'root'
})
export class PserviceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllorder(): Observable<Order[]>{
   return this.http.get<Order[]>(baseUrl+"/all_order");
  }

  getAllDeptProggress():Observable<any[]>{
    return this.http.get<any[]>(baseUrl+"/get_invp");
  }

  deployDept(orderId: number): Observable<any>{
    return this.http.patch<any>(baseUrl + "/depl_d/"+orderId, orderId);
  }

}
