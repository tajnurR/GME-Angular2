import {Component, OnInit, ViewChild} from '@angular/core';
import {DeptServiceService} from "../emp-add-dep/dept-service.service";
import {EmployeeServiceService} from "../../../services/employee-service.service";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {DeptModel} from "../emp-add-dep/dept-model.model";
import {SalaryGrade} from "../../../model/employees/salary-grade.model";
import {DesigServiceService} from "./desig-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-add-desig',
  templateUrl: './emp-add-desig.component.html',
  styleUrls: ['./emp-add-desig.component.css']
})
export class EmpAddDesigComponent implements OnInit {
  @ViewChild("desigForm")desigForm:NgForm;

  constructor(
    private deptService: DeptServiceService,
    private sgService: EmployeeServiceService,
    private desigService: DesigServiceService,
    private http: HttpClient,
    private router:Router
  ) { }

  desigM ={
    "desgi_id":"",
    "desgi_title":"",
    "department":{
      "dep_id": ""
    },
    "salaryGrade":{
      "sg_id":""
    }
  }

  submited: boolean = false;
  dept: DeptModel[]=[];
  sgList: SalaryGrade[]=[];

  ngOnInit(): void {
    this.getAllDept();
    this.getAllsg();
  }

  addNewSG(){
    this.desigM.desgi_title = this.desigForm.value.dgName;
    this.desigM.department.dep_id = this.desigForm.value.dept;
    this.desigM.salaryGrade.sg_id= this.desigForm.value.sg;

    this.desigService.createNewDesig(this.desigM).subscribe(
      data => {
        this.submited = true;
        this.desigForm.reset()
        this.gotodesigList();
      }
    )


  }

  getAllDept(){
    this.deptService.getALlDept().subscribe(
      depts => this.dept = depts
    )
  }

  getAllsg(){
    this.sgService.getAllSalaryGrade().subscribe(
      sgLists => this.sgList = sgLists
    )
  }

  gotodesigList() {
    this.router.navigate(['list_dep_sal_deg']);
  }

}
