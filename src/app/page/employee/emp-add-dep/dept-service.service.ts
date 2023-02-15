import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DeptModel} from "./dept-model.model";
import {Observable} from "rxjs";

const baseURl = "http://localhost:8181/emp/api";

@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {



  constructor(
    private http: HttpClient
  ) { }


  createNewDept(dept: DeptModel){
    return this.http.post(baseURl+"/savedep", dept);
  }

  getALlDept(): Observable<DeptModel[]>{
    return this.http.get<DeptModel[]>(baseURl+"/allDept");
  }
}
