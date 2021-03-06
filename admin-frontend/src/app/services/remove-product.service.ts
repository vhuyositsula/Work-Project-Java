import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';
import {Product} from '../models/product';

@Injectable()
export class RemoveProductService {

  private serverPath: string = "http://127.0.0.1:8080";

  constructor(private http:Http) { }

  sendProduct(productId:number) {
    let url = this.serverPath+'/product/remove';
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, productId, {headers: headers});
  }

}
