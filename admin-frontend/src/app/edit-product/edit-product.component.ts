import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../services/upload-image.service';
import { Product } from '../models/product';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetProductService } from '../services/get-product.service';
import { EditProductService } from '../services/edit-product.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private productId: number;
  private product: Product = new Product();
  
  private loggedIn = false;
  private updateProductSuccess: boolean = false;
  
  constructor(
  	private uploadImageService: UploadImageService,
  	private editProductService: EditProductService,
  	private getProductService: GetProductService,
  	private route: ActivatedRoute,
	private router: Router,
	private loginService:LoginService,
  	) { }

  
  onSubmit() {
	this.editProductService.sendProduct(this.product).subscribe(
		data => {
			this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
			this.updateProductSuccess = true;
		},
		error => console.log(error)
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
	this.route.params.forEach((params: Params) => {
		this.productId = Number.parseInt(params['id']);
	});

	this.getProductService.getProduct(this.productId).subscribe(
		res => {
			this.product = res.json();
		}, 
		error => console.log(error)
	);

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
