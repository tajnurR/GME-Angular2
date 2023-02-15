import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule, FormGroup, FormControl, NgForm } from "@angular/forms";
import { EmployeeServiceService } from "../../../services/employee-service.service";
import { SalaryGrade } from "../../../model/employees/salary-grade.model";
import { NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiRespons } from 'src/app/model/employees/api-respons';
import { Observable } from 'rxjs';
import { Department } from 'src/app/model/employees/department.model';
import { Designation } from 'src/app/model/employees/designation.model';
// import { ApiRespons } from 'src/app/model/employees/api-respons';

@Component({
  selector: 'app-list-dep-sal-deg',
  templateUrl: './list-dep-sal-deg.component.html',
  styleUrls: ['./list-dep-sal-deg.component.css']
})
export class ListDepSalDegComponent implements OnInit {
  salaryG: SalaryGrade = new SalaryGrade();
  apir: ApiRespons = new ApiRespons();
  submited = false;
  salaryGList?: SalaryGrade[];
  status = false;
  sgform?: NgForm;
  depList?: Department[];
  desig?:Designation[];



  constructor(
    private service: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.getAllsg();
    this.getAlldep();
    this.getAlldesig();
  }

//fet all Department
  getAlldep(): void {
    this.service.getAllDeprt().subscribe(
      result => this.depList = result
    )
  }
//get all designation
  getAlldesig(): void {
    this.service.getAllDesignation().subscribe(
      result => this.desig = result
    )
  }

  // Get All S G Record
  getAllsg(): void {
    this.service.getAllSalaryGrade().subscribe(
      result => this.salaryGList = result
    )
    this.gotoUserList();
  }

  // Delete SG By Id
  deleteByID(id: any) {
    this.service.deleteSg(id).subscribe(
      result => {
        this.status = true;

      }
    )

    console.log(this.status)
  }

  getById(id: any) {
    this.service.findSgById(id).subscribe(
      result => {
        this.salaryG = result
        console.log(this.salaryG)
      }
    )
  }

  gotoUserList() {
    this.router.navigate(['list_dep_sal_deg']);
  }

  updateSgRequers(id:any){
      return this.router.navigate(['emp_update_grade', id]);
  }

}
