import { Injectable } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ClientRegForm} from "../client-reg-form/client-reg-form.model";
import {OrderModel} from "./order-model.model";


@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  baseUrl = "http://localhost:8181/client/order/api";


  constructor(private http: HttpClient) { }

  createOrder(oderM: OrderModel){
    return this.http.post(this.baseUrl+"/save_order", oderM);
  }

  uploadOderImg(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(this.baseUrl+"/uploadOrderImg", formData);
  }

}
