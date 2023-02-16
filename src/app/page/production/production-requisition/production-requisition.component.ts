import { Component, OnInit } from '@angular/core';
import {PrServiceService} from "./pr-service.service";
import {flush} from "@angular/core/testing";

@Component({
  selector: 'app-production-requisition',
  templateUrl: './production-requisition.component.html',
  styleUrls: ['./production-requisition.component.css']
})
export class ProductionRequisitionComponent implements OnInit {

  constructor(
    private PRservice: PrServiceService
  ) { }

  deptOrder: any[]=[]
  singleDeptOrder: any;
  status = false;
  allemp:any[];

  ngOnInit(): void {
    this.getAllorder();
  }

  getAllorder(){
    this.PRservice.getDeptAllOrder().subscribe(
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
    this.PRservice.prdDelivary(orderId).subscribe(
      data => {
        this.getAllorder();
        this.getSingleDeptOrder(orderId);

      }
    )
  }


  getAllemp(epID:number){
    this.PRservice.getAllDeptEmp(epID).subscribe(
      data=>this.allemp = data
    )
  }

}
