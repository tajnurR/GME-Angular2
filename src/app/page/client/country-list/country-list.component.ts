import {Component, OnInit, ViewChild} from '@angular/core';
import {CountryListServiceService} from "./country-list-service.service";
import {CountryListModel} from "./country-list-model.model";
import {FormsModule, FormControl, NgForm} from "@angular/forms";
import {ApiRespons} from "../../../model/employees/api-respons";


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})

export class CountryListComponent implements OnInit {

@ViewChild("clForm")clForm: NgForm;
  constructor(
    private service: CountryListServiceService,

  ) { }

  apir: ApiRespons;
  country: CountryListModel[] = [];
  coun: CountryListModel = new CountryListModel();
  countrySave = false;

  ngOnInit(): void {
    this.countryList();
  }

  countryList(){
    this.service.getAllCountry().subscribe(
      country => {
        this.country = country
        console.log(this.country)
      }
    )
  }

  addNewCountry(clForm: NgForm){

    this.coun = clForm.value;
    this.service.createCountry(this.coun).subscribe(
      data => {
        clForm.reset();
        this.countrySave = true;
        this.countryList();
      }

    )
    this.ngOnInit();
  }

}
