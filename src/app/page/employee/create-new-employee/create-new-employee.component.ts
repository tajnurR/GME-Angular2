import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { Designation } from 'src/app/model/employees/designation.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { DeptModel } from '../emp-add-dep/dept-model.model';
import { DeptServiceService } from '../emp-add-dep/dept-service.service';
import { DesigServiceService } from '../emp-add-desig/desig-service.service';

@Component({
  selector: 'app-create-new-employee',
  templateUrl: './create-new-employee.component.html',
  styleUrls: ['./create-new-employee.component.css']
})
export class CreateNewEmployeeComponent implements OnInit {
  @ViewChild("employeeForm") employeeForm: NgForm;

  constructor(private deptService: DeptServiceService,
    private empSer:EmployeeServiceService,
    private desigService: DesigServiceService,
    private http: HttpClient,
    private router:Router
    ) { }

    empSave:any;
    emps:any;

    employeeM={

      "department": {
        "dep_id": ""
      },
      "designation": {
        "desgi_id": ""
      }
    }



  submited: boolean = false;
  dept: DeptModel[] = [];
  desig:Designation[]=[];

  ngOnInit(): void {
    this.getAllDept();
    this.getAllDesig();
  }


  addNewEmp(){
    this.employeeM.department.dep_id = this.employeeForm.value.dep_id;
    this.employeeM.designation.desgi_id = this.employeeForm.value.desgi_id;

    this.emps = this.employeeForm.value;
    this.empSave = Object.assign(this.emps, this.employeeM)
    console.log(this.empSave)
    this.empSer.createEmp(this.empSave).subscribe(
      data => {
              this.submited = true;
              this.employeeForm.reset()
      }
    )
    this.gotoEmpList();

  }


  getAllDept() {
    this.deptService.getALlDept().subscribe(
      depts => this.dept = depts
    )
  }
  getAllDesig() {
    this.desigService.getALlDept().subscribe(
      designa => this.desig = designa
    )
  }


  gotoEmpList(){
    this.router.navigate(['all_emp']);
  }

  msg = false;
  designImg: any;
  oder_s_img:File;

  getImg(event: any){
    this.oder_s_img = event.target.files[0];
    console.log(this.oder_s_img)
    }

}

