import { Component, OnInit } from '@angular/core';
import {QCDepartmentServiceService} from "./qcdepartment-service.service";

@Component({
  selector: 'app-quality-control-department',
  templateUrl: './quality-control-department.component.html',
  styleUrls: ['./quality-control-department.component.css']
})
export class QualityControlDepartmentComponent implements OnInit {

  constructor(
    private qcService: QCDepartmentServiceService
  ) { }

  deptOrder: any[]=[]
  singleDeptOrder: any;
  status = false;

  ngOnInit(): void {
    this.getAllorder();
  }

  getAllorder(){
    this.qcService.getDeptAllOrder().subscribe(
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
    this.qcService.prdDelivary(orderId).subscribe(
      data => {
        this.getAllorder();
        this.getSingleDeptOrder(orderId);

      }
    )
  }

}
