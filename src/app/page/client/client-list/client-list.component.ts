import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ClientRegFormService} from "../client-reg-form/client-reg-form.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ClientRegForm} from "../client-reg-form/client-reg-form.model";
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(
    private service: ClientRegFormService,
    private sanitizer: DomSanitizer
  ) { }

  imgs:any;
  imgSource:any;
  allClient: ClientRegForm[]=[];
  images:any[] = [];
  clientImgs:any[]=[]


  ngOnInit(): void {
      this.getAllClient();
  }

  getAllClient(){
    this.service.getAllClient().subscribe(
      cliet => {this.allClient = cliet

        this.service.findAllImg().subscribe(
          data => {
            this.images = data
            console.log(this.allClient)
            console.log(this.images)
            this.clientImgs = this.allClient.map((item, i)=> Object.assign({}, item,
              this.images.find(imgn => imgn.name == item.client_image)));

          }
        )

      }

    )
  }

  getimg(imgN: string){
    this.service.getImageByName(imgN).subscribe(
      data => {
        this.imgs = data;
        return this.imgSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.imgs.imageData}`)
      }
    )
  }

  convertImg(imgbase64: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${imgbase64}`)
  }

}
