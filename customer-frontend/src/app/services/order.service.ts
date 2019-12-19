import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Order} from '../models/order';

@Injectable()
export class OrderService {

  private serverPath: string = "http://127.0.0.1:8080";
  
  constructor(private http:Http) { }

  getOrderList() {
  	let url = this.serverPath+"/order/getOrderList";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }
}