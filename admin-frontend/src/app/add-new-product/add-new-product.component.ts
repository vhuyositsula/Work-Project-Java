import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { AddProductService } from '../services/add-product.service';
import {UploadImageService} from '../services/upload-image.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  private newProduct: Product = new Product();
  private addProductSuccess: boolean = false;
  private loggedIn = false;

  constructor(private addProductService:AddProductService,
			  private uploadImageService:UploadImageService,
			  private loginService:LoginService,
			  private router:Router,) { }

  onSubmit() {
  	this.addProductService.sendProduct(this.newProduct).subscribe(
  		res => {
			//location.reload();
			this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
  			this.newProduct = new Product();
  			this.newProduct.active=true;
  			this.newProduct.category="Food";
  			this.addProductSuccess=true;
  		},
  		error => {
  			console.log(error);
  		}
  	);
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        location.reload();
      },
      error => {
        console.log(error);
      }
    );

    this.router.navigate(['/']);
  }
  ngOnInit() {
  	
  	this.newProduct.active=true;
	this.newProduct.category="Food";
	  
	this.loginService.checkSession().subscribe(
		res => {
		  this.loggedIn=true;
		},
		error => {
		  this.loggedIn=false;
		}
	  );
	
	  
  }

}
