import { Component, OnInit } from '@angular/core';
import {AttendServiceService} from "./attend-service.service";

@Component({
  selector: 'app-emp-attendance-live',
  templateUrl: './emp-attendance-live.component.html',
  styleUrls: ['./emp-attendance-live.component.css']
})
export class EmpAttendanceLiveComponent implements OnInit {
  // ng update @angular/cli @angular/core --allow-dirty --force
  constructor(
      private attService: AttendServiceService
  ) { }

  impProfile:any;
  ngOnInit(): void {
  }
  onResult(result:string){
    this.attService.setattden(result).subscribe(
        data => {this.impProfile =data
          console.log(this.impProfile)
        }
    )
  }
}
