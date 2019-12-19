import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {GetProductService} from '../services/get-product.service';
import {Product} from '../models/product';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

    private product:Product = new Product();
    private productId: number;
  
    private loggedIn = false;

    constructor(private getProductService:GetProductService,
                private route:ActivatedRoute, 
                private router:Router,
                private loginService:LoginService) { }
  
      onSelect(product:Product) {
        this.router.navigate(['/editProduct', this.product.id])
        // .then(s => location.reload())
        ;
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
        error => {
          console.log(error);
        }
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