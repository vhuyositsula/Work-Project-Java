import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class GetProductService {

  private serverPath: string = "http://127.0.0.1:8080";

  constructor(private http:Http) { }

  getProduct(id:number) {
  	let url = this.serverPath+'/product/'+id;
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
