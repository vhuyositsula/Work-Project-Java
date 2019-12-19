import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { UserPayment } from '../models/user-payment';
import { UserBilling } from '../models/user-billing';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { SAcon } from '../models/sacon';
import { UserDelivery } from '../models/user-delivery';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private serverPath: string = "https://127.0.0.1:8080";
  private dataFetched = false;
	private loginError:boolean;
	private loggedIn:boolean;
  private credential = {'username':'', 'password':''};
  
  private selectedProfileTab: number = 0;
	private selectedBillingTab: number = 0;
  private user: User = new User();
  
	private userPayment: UserPayment = new UserPayment();
	private userBilling: UserBilling = new UserBilling();
	private userPaymentList: UserPayment[] =[];
	private defaultPaymentSet:boolean;
	private defaultUserPaymentId: number;
	private provinceList: string[] = [];

	private userDelivery: UserDelivery = new UserDelivery();
	private userDeliveryList: UserDelivery[] = [];

	private defaultUserDeliveryId: number;
	private defaultDeliverySet: boolean;

  constructor(
  	private loginService: LoginService,
  	private userService: UserService,
	private paymentService: PaymentService,
	private deliveryService:DeliveryService,
  	private router: Router
  	) { }

  selectedBillingChange(val: number) {
  	this.selectedBillingTab = val;
  }


  onNewPayment() {
  	this.paymentService.newPayment(this.userPayment).subscribe(
  		res => {
  			this.getCurrentUser();
			  this.userPayment=new UserPayment();
  		},
  		error => {
  			console.log(error.text());
  		}
	  );
	  
	  this.deliveryService.newDelivery(this.userDelivery).subscribe(
		res => {
			this.getCurrentUser();	
	  		this.userDelivery = new UserDelivery();
		},
		error => {
			console.log(error.text());
		}
	);
  }

  onUpdatePayment (payment: UserPayment) {
  	this.userPayment = payment;
  	this.userBilling = payment.userBilling;
  	this.selectedBillingTab = 1;
  }

  onRemovePayment(id:number) {
  	this.paymentService.removePayment(id).subscribe(
  		res => {
  			this.getCurrentUser();
  		},
  		error => {
  			console.log(error.text());
  		}
  	);
  }

  setDefaultPayment() {
  	this.defaultPaymentSet = false;
  	this.paymentService.setDefaultPayment(this.defaultUserPaymentId).subscribe(
  		res => {
  			this.getCurrentUser();
  			this.defaultPaymentSet = true;
  		},
  		error => {
  			console.log(error.text());
  		}
  	);
  }

  onNewDelivery() {
	this.deliveryService.newDelivery(this.userDelivery).subscribe(
		res => {
			this.getCurrentUser();	
	  		this.userDelivery = new UserDelivery();
		},
		error => {
			console.log(error.text());
		}
	);
}

onUpdateDelivery(delivery: UserDelivery) {
	this.userDelivery = delivery;
}

onRemoveDelivery(id: number) {
	this.deliveryService.removeDelivery(id).subscribe(
		res => {
			this.getCurrentUser();
		},
		error => {
			console.log(error.text());
		}
	);
}

setDefaultDelivery() {
	this.defaultDeliverySet = false;
	this.deliveryService.setDefaultDelivery(this.defaultUserDeliveryId).subscribe(
		res => {
			this.getCurrentUser();
			this.defaultDeliverySet = true;
		},
		error => {
			console.log(error.text());
		}
	);
}



  logout() {
  	this.loginService.logout().subscribe(
  		res => {
  			location.reload();
  		},
  		err => {
  			console.log(err);
  		}
  	);
  }

  getCurrentUser() {
	this.userService.getCurrentUser().subscribe(
		res => {
			this.user = res.json();
			this.userPaymentList = this.user.userPaymentList;
			this.userDeliveryList = this.user.userDeliveryList;

			for (let index in this.userPaymentList) {
				if(this.userPaymentList[index].defaultPayment) {
					this.defaultUserPaymentId=this.userPaymentList[index].id;
					break;
				}
			}

			for (let index in this.userDeliveryList) {
				if(this.userDeliveryList[index].userDeliveryDefault) {
					this.defaultUserDeliveryId=this.userDeliveryList[index].id;
					break;
				}
			}

			this.dataFetched = true;
		},
		err => {
			console.log(err);
		}
	);
}


  
  ngOnInit() {

    this.loginService.checkSession().subscribe(
  		res => {
  			this.loggedIn = true;
  		},
  		error => {
  			this.loggedIn = false;
  			console.log("inactive session");
  			this.router.navigate(['/home']);
  		}
    );
    
	this.getCurrentUser();
	
	for (let s in SAcon.saProvince) {
		this.provinceList.push(s);
	}

    this.userBilling.userBillingProvince="";
  	this.userPayment.type="";
  	this.userPayment.expiryMonth="";
  	this.userPayment.expiryYear="";
  	this.userPayment.userBilling = this.userBilling;
	this.defaultPaymentSet = false;
	  
	this.userDelivery.userDeliveryProvince="";
  	this.defaultDeliverySet=false;
  }

}
