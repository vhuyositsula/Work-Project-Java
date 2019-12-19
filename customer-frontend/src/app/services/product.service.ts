import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class ProductService {

  private serverPath: string = "http://127.0.0.1:8080";

  constructor(private http:Http) { }

  getProductList() {
  	let url = this.serverPath+"/product/productList";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

  getProduct(id:number) {
  	let url = this.serverPath+"/product/"+id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

  searchProduct(keyword:string) {
  	let url = this.serverPath+"/product/searchProduct";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, keyword, {headers: tokenHeader});
  }

}
