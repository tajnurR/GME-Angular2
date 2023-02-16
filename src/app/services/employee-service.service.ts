import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Designation} from "../model/employees/designation.model";
import {Department} from "../model/employees/department.model";
import {SalaryGrade} from "../model/employees/salary-grade.model";
import { ApiRespons } from '../model/employees/api-respons';
import { Employee } from '../model/employees/employee';

const baseUrl = 'http://localhost:8181/emp/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {



  // Create a constructor of imported file
  constructor(
    private http: HttpClient,
  ) { }
//Get All Employee
  allEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>(baseUrl + "/allemp")
  }

  findEmpById(id: number): Observable<any> {
    return this.http.get(baseUrl + '/find_id/' + id)
  }

  // Create New Employee
  createEmp(emp: Employee) {
    return this.http.post(baseUrl + "/save_emp", emp);
  }


  // Get all Depart by Api
  getAllDeprt(): Observable<Department[]>{
    return this.http.get<Department[]>(baseUrl +"/allDept")
  }



  // Get all Designation by Api
  getAllDesignation(): Observable<Designation[]> {
    return this.http.get<Designation[]>(baseUrl + "/allDesig")
  }

  // Create New Salary Grade
  createSG(sg: SalaryGrade){
    return this.http.post(baseUrl+"/save_salary_grade", sg);
  }

  // Show All Salery Grade
  getAllSalaryGrade(): Observable<SalaryGrade[]>{
    return this.http.get<SalaryGrade[]>(baseUrl+'/get_salary_g')
  }

  // Delete Salery Grade by Id
  deleteSg(id: any): Observable<ApiRespons>{
     return this.http.delete<ApiRespons>(baseUrl+"/delete_sg/"+id);
  }

  findSgById(id: number): Observable<any>{
    return this.http.get(baseUrl+'/find_id/'+id)
  }


  updateStudent(salaryGrade: SalaryGrade): Observable<any>{
    return this.http.put<any>(baseUrl+"update_salary_grade/", salaryGrade);
  }

  // uploadOderImg(file: File){
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);
  //   console.log(formData)
  //   return this.http.post(baseUrl+"/upload_emp_img", file);
  // }

}
