import { Component, OnInit } from '@angular/core';
import {WashingDepartmentServiceService} from "./washing-department-service.service";

@Component({
  selector: 'app-washing-department',
  templateUrl: './washing-department.component.html',
  styleUrls: ['./washing-department.component.css']
})
export class WashingDepartmentComponent implements OnInit {

  constructor(
    private wadService: WashingDepartmentServiceService
  ) { }

  deptOrder: any[]=[]
  singleDeptOrder: any;
  status = false;

  ngOnInit(): void {
    this.getAllorder();
  }

  getAllorder(){
    this.wadService.getDeptAllOrder().subscribe(
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
    this.wadService.prdDelivary(orderId).subscribe(
      data => {
        this.getAllorder();
        this.getSingleDeptOrder(orderId);

      }
    )
  }

}
