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
  allemp:any[]=[];
  allAOrder:any={
    "inv_id":'',
    "inv_status": '',
    "employees":{
      "em_id":""
    },
    "clientOrder":{
      "coid":""
    }
  };

  

  ngOnInit(): void {
    this.getAllorder();
    this.getAllemp(1)
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

  freeEmp:any[]=[];
  getSingleDeptOrder(orderId: number){
    console.log(orderId)
    this.singleDeptOrder = this.deptOrder.find(ord => ord.clientOrder.coid == orderId);

    this.PRservice.getAtiveOrder(orderId).subscribe(
      data=>{this.allAOrder = data;
        this.freeEmp = this.allemp.filter(x=>x.em_id == this.allAOrder.employees.em_id);
      }
    )

    
    console.log(this.freeEmp)
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
      data=>{
        this.allemp = data;
        console.log(this.allemp)
      }
    )
  }

  getActiveOrder(orid:number){
    
  }

}
