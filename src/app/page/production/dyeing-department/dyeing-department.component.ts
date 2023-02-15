import { Component, OnInit } from '@angular/core';
import {DyeingDepartmentServiceService} from "./dyeing-department-service.service";

@Component({
  selector: 'app-dyeing-department',
  templateUrl: './dyeing-department.component.html',
  styleUrls: ['./dyeing-department.component.css']
})
export class DyeingDepartmentComponent implements OnInit {

  constructor(
    private dydService: DyeingDepartmentServiceService
  ) { }

  deptOrder: any[]=[]
  singleDeptOrder: any;
  status = false;

  ngOnInit(): void {
    this.getAllorder();
  }

  getAllorder(){
    this.dydService.getDeptAllOrder().subscribe(
      data => {
        this.deptOrder = data;
        this.getSingleDeptOrder(this.deptOrder[0].clientOrder.coid);
        this.status = true;
      }
    )
  }

  getSingleDeptOrder(orderId: number){
    this.singleDeptOrder = this.deptOrder.find(ord => ord.clientOrder.coid == orderId);
  }

  deliveryOrder(orderId: number){
    this.dydService.prdDelivary(orderId).subscribe(
      data => {
        this.getAllorder();
        this.getSingleDeptOrder(orderId);

      }
    )
  }

}
