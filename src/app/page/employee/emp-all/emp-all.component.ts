import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employees/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-emp-all',
  templateUrl: './emp-all.component.html',
  styleUrls: ['./emp-all.component.css']
})
export class EmpAllComponent implements OnInit {

  employeeList?:Employee[];


  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
    this.allEmp();
  }

  //get all Department
  allEmp():void{
    this.service.allEmployeeList().subscribe(
      result=> this.employeeList=result
    )
  }
}
