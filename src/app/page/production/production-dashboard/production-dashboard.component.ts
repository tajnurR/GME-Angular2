import { Component, OnInit } from '@angular/core';
import {PserviceService} from "./pservice.service";
import {Order} from "./pboard.model";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-production-dashboard',
  templateUrl: './production-dashboard.component.html',
  styleUrls: ['./production-dashboard.component.css']
})
export class ProductionDashboardComponent implements OnInit {

  constructor(
    private service: PserviceService,
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  // variable declaration Point
  order: Order[] = [];
  odx: any[]=[];
  odderView:any;
  odp: any[] = [];
  odps: any;
  circle_fill: string;
  bg_fill: string;
  checka = false;
  checkdept = false;

  ngOnInit(): void {
  this.getAlldp();
  this.getALLO()
  }

  getALLO(){
    this.service.getAllorder().subscribe(
      data => {
        this.order = data
        this.onChangeOrder(this.order[0].coid)
      }
    )
  }

  // Get All Propertment Process
  getAlldp(){
    this.service.getAllDeptProggress().subscribe(
      result => {this.odp = result;
        this.checkdept = true;
      })
  }

  onChangeOrder(id:number){
    this.odderView = this.order.find(oid => oid.coid == id);
    this.checka = true
    this.odps = this.odp.find(opid=> opid.clientOrder.coid == id )

  }


  assingDept(orderId: number):void{
    this.service.deployDept(orderId).subscribe(
      data => {
        this.getALLO();
        this.getAlldp();
        this.onChangeOrder(orderId)
      }
    )
  }



}
