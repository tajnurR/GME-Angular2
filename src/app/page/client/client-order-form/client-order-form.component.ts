import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {OrderModel} from "./order-model.model";
import {OrderServiceService} from "./order-service.service";

@Component({
  selector: 'app-client-order-form',
  templateUrl: './client-order-form.component.html',
  styleUrls: ['./client-order-form.component.css']
})
export class ClientOrderFormComponent implements OnInit {
@ViewChild("orderForm")orderForm: NgForm;
  constructor(private orderService: OrderServiceService) { }


  oderDetails: OrderModel;
  submited = false;
  ngOnInit(): void {
  }

  msg:string;
  designImg: any;
  oder_s_img:File;

  getImg(event: any){
    // this.designImg = event.target.files[0];
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.designImg = reader.result;
      this.oder_s_img = event.target.files[0];
    }
  }



  onSubmit(){
    this.oderDetails = this.orderForm.value;
    console.log(this.oderDetails);
    this.orderService.uploadOderImg(this.oder_s_img).subscribe(
      data => { console.log("Done");
        this.orderService.createOrder(this.oderDetails).subscribe(
          data => { this.orderForm.reset();
            this.submited = true;
          }
        )
      }
    )
  }

}
