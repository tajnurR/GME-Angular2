import { Component, OnInit } from '@angular/core';
import {IOSDepartmentServiceService} from "./iosdepartment-service.service";

@Component({
  selector: 'app-inspection-order-shipment',
  templateUrl: './inspection-order-shipment.component.html',
  styleUrls: ['./inspection-order-shipment.component.css']
})
export class InspectionOrderShipmentComponent implements OnInit {

  constructor(
    private iosService: IOSDepartmentServiceService
  ) { }

  deptOrder: any[]=[]
  singleDeptOrder: any;
  status = false;

  ngOnInit(): void {
    this.getAllorder();
  }

  getAllorder(){
    this.iosService.getDeptAllOrder().subscribe(
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
    this.iosService.prdDelivary(orderId).subscribe(
      data => {
        this.getAllorder();
        this.getSingleDeptOrder(orderId);

      }
    )
  }


}
