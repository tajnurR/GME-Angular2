import { Component, OnInit } from '@angular/core';
import {PackagingDepartmentServiceService} from "./packaging-department-service.service";

@Component({
  selector: 'app-packaging-department',
  templateUrl: './packaging-department.component.html',
  styleUrls: ['./packaging-department.component.css']
})
export class PackagingDepartmentComponent implements OnInit {

  constructor(
    private pkgService: PackagingDepartmentServiceService
  ) { }

  deptOrder: any[]=[]
  singleDeptOrder: any;
  status = false;

  ngOnInit(): void {
    this.getAllorder();
  }

  getAllorder(){
    this.pkgService.getDeptAllOrder().subscribe(
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
    this.pkgService.prdDelivary(orderId).subscribe(
      data => {
        this.getAllorder();
        this.getSingleDeptOrder(orderId);

      }
    )
  }


}
