import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule, FormControl, NgForm} from "@angular/forms";
import {EmployeeServiceService} from "../../../services/employee-service.service";
import { SalaryGrade } from "../../../model/employees/salary-grade.model";
import {NgModule} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { ApiRespons } from 'src/app/model/employees/api-respons';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-emp-add-grade',
  templateUrl: './emp-add-grade.component.html',
  styleUrls: ['./emp-add-grade.component.css']
})
export class EmpAddGradeComponent implements OnInit {
  @ViewChild("sgForm")sgForm: NgForm;
  salaryG: SalaryGrade = new SalaryGrade();
  sg: SalaryGrade;
  apir: ApiRespons = new ApiRespons();
  submited = false;
  salaryGList: SalaryGrade[] = [];
  status = false;
  // sgform?: NgForm;
  id: number = 0;


  constructor(
    private service: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    // this.salaryG = new SalaryGrade;
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    if (this.id > 0) {
      this.service.findSgById(this.id).subscribe(
        result => {
          this.salaryGList = result
          this.sg = this.salaryGList[0];
          console.log(this.sg)

          this.sgForm.setValue(this.sg)

        }
      )

    }
  }


  // Save new S G
  saveSG(): void{
    this.sg = this.sgForm.value;
    this.service.createSG(this.sg).subscribe(
      result =>
      this.gotoUserList()
    )
    this.submited = true
    this.sgForm.reset();
    this.gotoUserList();
  }

  // After Save Rediract to this router
  gotoUserList() {
    this.router.navigate(['emp_add_grade']);
  }


}
