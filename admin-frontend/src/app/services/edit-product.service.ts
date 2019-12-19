import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { Product } from '../models/product';

@Injectable()
export class EditProductService {

  private serverPath: string = "http://127.0.0.1:8080";

  constructor(private http:Http) { }

  sendProduct(product:Product) {
  let url = this.serverPath+'/product/update';
    
  let headers = new Headers ({
    'Content-Type': 'application/json',
    'x-auth-token' : localStorage.getItem('xAuthToken')
  });

  return this.http.post(url, JSON.stringify(product), {headers: headers});
}
}
