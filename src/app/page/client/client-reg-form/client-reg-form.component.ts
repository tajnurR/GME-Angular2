import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryListModel } from '../country-list/country-list-model.model';
import { ClientRegForm } from './client-reg-form.model';
import { ClientRegFormService } from './client-reg-form.service';

@Component({
  selector: 'app-client-reg-form',
  templateUrl: './client-reg-form.component.html',
  styleUrls: ['./client-reg-form.component.css']
})
export class ClientRegFormComponent implements OnInit {
  @ViewChild("clientForm")clientForm:NgForm;

  constructor(
    private clientservice: ClientRegFormService ,
    private countryService: ClientRegFormService ,
    private router:Router

    ) { }


 clients: ClientRegForm;
  client: any[] = [];
  country : any[] = [];
  submited: boolean = false;


  ngOnInit(): void {
    this.clientList();
    this.countryList();
  }

  clientList() {
    this.clientservice.getAllClient().subscribe(
      client => {
        this.client = client
        console.log(this.client)
      }
    )
  }


  countryList(){
    this.countryService.getAllCountry().subscribe(
      country => {
        this.country = country
        console.log(this.country)
      }
    )
  }

  profilImg: File;
  profileImg(event: any){
    console.log(event)
    this.profilImg = event.target.files[0];
  }

  addNewClient(){
    this.clients = this.clientForm.value;
    console.log(this.profilImg)
    this.clientservice.uploadImg(this.profilImg).subscribe(
      data => { console.log("Done")
        this.clientservice.createClient(this.clients).subscribe(
          data => {this.clientForm.reset()
            this.submited = true;
            this.gotoClientgList();

          }
        )
      }
    )


  

  }
  gotoClientgList() {
    this.router.navigate(['client_list']);
  }






}
