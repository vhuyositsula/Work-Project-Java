import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GetProductListService {

  private serverPath: string = "http://127.0.0.1:8080";

  constructor(private http:Http) { }

  getProductList() {
  	let url = this.serverPath+'/product/productList';
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
