import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UserDelivery } from '../models/user-delivery';

@Injectable()
export class DeliveryService {

  private serverPath: string = "http://127.0.0.1:8080";

  constructor(private http : Http) { }

  newDelivery(delivery: UserDelivery) {
  	let url = this.serverPath+"/delivery/add";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, JSON.stringify(delivery), {headers: tokenHeader});
  }

  getUserDeliveryList() {
  	let url = this.serverPath+"/delivery/getUserDeliveryList";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

  removeDelivery(id:number){
  	let url = this.serverPath+"/delivery/remove";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, id, {headers: tokenHeader});
  }

  setDefaultDelivery(id:number){
  	let url = this.serverPath+"/delivery/setDefault";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, id, {headers: tokenHeader});
  }
}
