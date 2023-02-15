import { Component, OnInit } from '@angular/core';
import {StitchingDepartmentServiceService} from "./stitching-department-service.service";

@Component({
  selector: 'app-stitching-department',
  templateUrl: './stitching-department.component.html',
  styleUrls: ['./stitching-department.component.css']
})
export class StitchingDepartmentComponent implements OnInit {

  constructor(
    private stdService: StitchingDepartmentServiceService
  ) { }

  deptOrder: any[]=[]
  singleDeptOrder: any;
  status = false;

  ngOnInit(): void {
    this.getAllorder();
  }

  getAllorder(){
    this.stdService.getDeptAllOrder().subscribe(
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
    this.stdService.prdDelivary(orderId).subscribe(
      data => {
        this.getAllorder();
        this.getSingleDeptOrder(orderId);

      }
    )
  }

}
