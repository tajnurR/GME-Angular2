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

    employeeM={
      "em_employeeID": "",
      "em_name": "",
      "em_fatherName": "",
      "em_nid": "",
      "em_phone": "",
      "em_gender": "",
      "em_dob": "",
      "em_relationshipStatus": "",
      "em_spouseName": "",
      "em_spouseNID": "",
      "em_PreviousCompany": "",
      "em_profileImg": "",
      "em_joiningDate": "",
      "em_resentAddress": "",
      "em_permanentAddress": "",
      "em_email": "",
      "em_password": "",
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
    this.employeeM.em_employeeID = this.employeeForm.value.em_employeeID;
    this.employeeM.em_name = this.employeeForm.value.em_name;
    this.employeeM.em_fatherName = this.employeeForm.value.em_fatherName;
    this.employeeM.em_nid = this.employeeForm.value.em_nid;
    this.employeeM.em_phone = this.employeeForm.value.em_phone;
    this.employeeM.em_gender = this.employeeForm.value.em_gender;
    this.employeeM.em_dob = this.employeeForm.value.em_dob;
    this.employeeM.em_relationshipStatus = this.employeeForm.value.em_relationshipStatus;
    this.employeeM.em_spouseName = this.employeeForm.value.em_spouseName;
    this.employeeM.em_spouseNID = this.employeeForm.value.em_spouseNID;
    this.employeeM.em_PreviousCompany = this.employeeForm.value.em_PreviousCompany;
    this.employeeM.em_profileImg = this.employeeForm.value.em_profileImg;
    this.employeeM.em_joiningDate = this.employeeForm.value.em_joiningDate;
    this.employeeM.em_resentAddress = this.employeeForm.value.em_resentAddress;
    this.employeeM.em_permanentAddress = this.employeeForm.value.em_permanentAddress;
    this.employeeM.em_email = this.employeeForm.value.em_email;
    this.employeeM.em_password = this.employeeForm.value.em_password;
    this.employeeM.department.dep_id = this.employeeForm.value.dep_id;
    this.employeeM.designation.desgi_id = this.employeeForm.value.desgi_id;

    this.empSer.createEmp(this.employeeM).subscribe(
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
}

