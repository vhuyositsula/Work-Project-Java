import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';

import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  private serverPath: string = "http://127.0.0.1:8080";
  private loggedIn = false;

  private productId: number;
  private product: Product = new Product();
  private numberList: number[] = [1,2,3,4,5,6,7,8,9];
  private qty: number;

 private addProductSuccess: boolean = false;
 private notEnoughStock:boolean = false;


  constructor(
	private loginService: LoginService,
	private productService:ProductService,
    private cartService: CartService,
	private router:Router,
	private http:Http,
	private route:ActivatedRoute
  	) { }

	  onAddToCart() {
		this.cartService.addItem(this.productId, this.qty).subscribe(
		  res => {
			console.log(res.text());
			this.addProductSuccess=true;
		  },
		  err => {
			console.log(err.text());
			this.notEnoughStock=true;
		  }
		);
	  }

  logout() {
		this.loginService.logout().subscribe(
			res => {
		  //location.reload();
		  this.router.navigate(['/home']);
			},
			err => {
				console.log(err);
			}
		);
	}

  ngOnInit() {
	this.route.params.forEach((params: Params) => {
		this.productId = Number.parseInt(params['id']);
	});

	this.productService.getProduct(this.productId).subscribe(
		res => {
			this.product=res.json();
		},
		error => {
			console.log(error);
		}
	);

	this.qty = 1;
  
  this.loginService.checkSession().subscribe(
		res => {
			this.loggedIn = true;
		},
		err => {
			this.loggedIn =false;
		}
	);

  }
}
