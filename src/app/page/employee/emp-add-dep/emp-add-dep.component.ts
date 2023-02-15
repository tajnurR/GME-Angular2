import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import {Department} from "../../../model/employees/department.model";
import {DeptModel} from "./dept-model.model";
import {DeptServiceService} from "./dept-service.service";

@Component({
  selector: 'app-emp-add-dep',
  templateUrl: './emp-add-dep.component.html',
  styleUrls: ['./emp-add-dep.component.css']
})
export class EmpAddDepComponent implements OnInit {
@ViewChild("deptF")deptF: NgForm;


  constructor(private deptService: DeptServiceService,
    private router:Router) { }


  dept: DeptModel;
  submited: boolean = false;
  ngOnInit(): void {
    // this.retriveDeptment();

  }

  addNewDept(){
    this.dept = this.deptF.value;
    console.log(this.dept)
    this.deptService.createNewDept(this.dept).subscribe(
      result => {
        this.submited = true;
        this.deptF.reset();
        this.gotodepList();
      }
    )
  }


  gotodepList() {
    this.router.navigate(['list_dep_sal_deg']);
  }


  // retriveDeptment(): void {
  //   this.deptService.getAllDeprt()
  //     .subscribe({
  //       next: (data) => {
  //           this.department = data;
  //       },
  //       error: (e) => console.error(e)
  //     })
  // }

}
