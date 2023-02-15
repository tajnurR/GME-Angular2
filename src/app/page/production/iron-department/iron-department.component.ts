import { Component, OnInit } from '@angular/core';
import {IronDepartmentServiceService} from "./iron-department-service.service";

@Component({
  selector: 'app-iron-department',
  templateUrl: './iron-department.component.html',
  styleUrls: ['./iron-department.component.css']
})
export class IronDepartmentComponent implements OnInit {

  constructor(
    private irdService: IronDepartmentServiceService
  ) { }

  deptOrder: any[]=[]
  singleDeptOrder: any;
  status = false;

  ngOnInit(): void {
    this.getAllorder();
  }

  getAllorder(){
    this.irdService.getDeptAllOrder().subscribe(
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
    this.irdService.prdDelivary(orderId).subscribe(
      data => {
        this.getAllorder();
        this.getSingleDeptOrder(orderId);

      }
    )
  }

}
