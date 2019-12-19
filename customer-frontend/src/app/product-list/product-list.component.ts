import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import { LoginService } from '../services/login.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    private loggedIn = false;
 	private serverPath: string = "http://127.0.0.1:8080";
  
 	
	 public filterQuery = "";
	 public rowsOnPage = 5;
 
	 private selectedProduct: Product;
	 private productList: Product[];
	 private qty: number;
	 private productId: number;
	 private addProductSuccess: boolean = false;
	 private notEnoughStock:boolean = false
	 
  	constructor(
	private loginService: LoginService,
	private cartService: CartService,
	private productService:ProductService,
	private router:Router,
	private http:Http,
	private route:ActivatedRoute
  	) { }

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

	onSelect(product: Product) {
		this.selectedProduct = product;
		this.router.navigate(['product-details', this.selectedProduct.id]);
	}

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
	
	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			if(params['productList']) {
				console.log("filtered product list");
				this.productList = JSON.parse(params['productList']);
			} else {
				this.productService.getProductList().subscribe(
					res => {
						console.log(res.json());
						this.productList = res.json();
					},
					err => {
						console.log(err);
					}
					);
			}
		});

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




  	
	  
	  





