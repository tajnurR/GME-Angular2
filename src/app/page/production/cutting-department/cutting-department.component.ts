import { Component, OnInit } from '@angular/core';
import {CuttingDepartmentServiceService} from "./cutting-department-service.service";

@Component({
  selector: 'app-cutting-department',
  templateUrl: './cutting-department.component.html',
  styleUrls: ['./cutting-department.component.css']
})
export class CuttingDepartmentComponent implements OnInit {

  constructor(
    private cutService: CuttingDepartmentServiceService
  ) { }

  deptOrder: any[]=[]
  singleDeptOrder: any;
  status = false;

  ngOnInit(): void {
    this.getAllorder();
  }

  getAllorder(){
    this.cutService.getDeptAllOrder().subscribe(
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
    this.cutService.prdDelivary(orderId).subscribe(
      data => {
        this.getAllorder();
        this.getSingleDeptOrder(orderId);

      }
    )
  }


}
