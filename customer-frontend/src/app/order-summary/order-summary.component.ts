import { Component, OnInit } from '@angular/core';


import { Params, ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from '../services/checkout.service';
import { Order } from '../models/order';
import { CartItem } from '../models/cart-item';


@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  private serverPath: string = "http://127.0.0.1:8080";
  
	private order:Order = new Order();
	private estimatedDeliveryDate: string;
	private cartItemList: CartItem[] = [];

  constructor(
  	private checkoutService: CheckoutService,
  	private route: ActivatedRoute,
  	private router: Router
  	) { }

  ngOnInit() {
  	this.route.queryParams.subscribe(params => {
  		this.order = JSON.parse(params['order']);

  		let deliDate = new Date();

  		let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  		this.estimatedDeliveryDate = days[deliDate.getDay()]+', '+deliDate.getFullYear()+'/'+deliDate.getMonth()+'/'+deliDate.getDate();

  		this.cartItemList = this.order.cartItemList;
  	});
  }

}
