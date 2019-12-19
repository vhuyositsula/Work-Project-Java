import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';
import {DeliveryAddress} from '../models/delivery-address';
import {BillingAddress} from '../models/billing-address';
import {Payment} from '../models/payment';


@Injectable()
export class CheckoutService {

  private serverPath: string = "http://127.0.0.1:8080";

  constructor(private http: Http) { }

  checkout(
  	deliveryAddress: DeliveryAddress,
  	billingAddress: BillingAddress,
  	payment:Payment
  	){
		let url = this.serverPath+"/checkout/checkout";
		let order ={
			"deliveryAddress" : deliveryAddress,
			"billingAddress" : billingAddress,
			"payment" : payment
		}

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, order, {headers: tokenHeader});
  }

  getUserOrder() {
  	let url = this.serverPath+"/checkout/getUserOrder";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});

  }

}