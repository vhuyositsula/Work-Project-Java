import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {Router, NavigationExtras} from "@angular/router";
import {CartService} from '../services/cart.service';
import {DeliveryService} from '../services/delivery.service';
import {PaymentService} from '../services/payment.service';
import {CheckoutService} from '../services/checkout.service';
import {CartItem} from '../models/cart-item';
import {ShoppingCart} from '../models/shopping-cart';
import {DeliveryAddress} from '../models/delivery-address';
import {BillingAddress} from '../models/billing-address';
import {UserPayment} from '../models/user-payment';
import {UserBilling} from '../models/user-billing';
import {UserDelivery} from '../models/user-delivery';
import {Payment} from '../models/payment';
import {Order} from '../models/order';
import { SAcon } from '../models/sacon';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private serverPath: string = "https://127.0.0.1:8080";
  private selectedProduct: Product;
  private cartItemList: CartItem[] = [];
  private cartItemNumber: number;
  private shoppingCart: ShoppingCart = new ShoppingCart();
  private cartItemUpdated:boolean;
  private deliveryAddress:DeliveryAddress=new DeliveryAddress();
  private billingAddress:BillingAddress = new BillingAddress();
  private userPayment:UserPayment = new UserPayment();
  private userDelivery:UserDelivery = new UserDelivery();
  private userBilling: UserBilling = new UserBilling();
  private userDeliveryList: UserDelivery[] = [];
  private userPaymentList: UserPayment[] = [];
  private payment: Payment = new Payment();
  private selectedTab: number;
  private emptyDeliveryList: boolean = true;
  private emptyPaymentList: boolean = true;
  private provinceList: string[] = [];
  private order:Order = new Order();

  constructor(
  	private router:Router, 
  	private cartService: CartService, 
  	private deliveryService: DeliveryService,
  	private paymentService: PaymentService,
  	private checkoutService: CheckoutService
  	) { }


    onSelect(product:Product) {
      this.selectedProduct = product;
      this.router.navigate(['/product-details', this.selectedProduct.id]);
    }
  
    selectedChange(val :number ){
      this.selectedTab=val;
    }
  
    goToPayment() {
      this.selectedTab=1;
    }
  
    goToReview() {
      this.selectedTab=2;
    }
  
    getCartItemList(){
      this.cartService.getCartItemList().subscribe(
        res=>{
          this.cartItemList = res.json();
          this.cartItemNumber = this.cartItemList.length;
        },
        error=>{
          console.log(error.text());
        }
        );
    }

    setDeliveryAddress(userDelivery: UserDelivery) {
      this.deliveryAddress.deliveryAddress = userDelivery.userDeliveryAddress;
      this.deliveryAddress.deliveryAddressStreet = userDelivery.userDeliveryStreet;
      this.deliveryAddress.deliveryAddressCity = userDelivery.userDeliveryCity;
      this.deliveryAddress.deliveryAddressProvince = userDelivery.userDeliveryProvince;
      this.deliveryAddress.deliveryAddressPostalCode = userDelivery.userDeliveryPostalCode;
    }    
  
    setPaymentMethod(userPayment: UserPayment) {
      this.payment.type = userPayment.type;
      this.payment.cardNumber = userPayment.cardNumber;
      this.payment.expiryMonth = userPayment.expiryMonth;
      this.payment.expiryYear = userPayment.expiryYear;
      this.payment.cvc = userPayment.cvc;
      this.payment.holderName = userPayment.holderName;
      this.payment.defaultPayment = userPayment.defaultPayment;
      this.billingAddress.billingAddress = userPayment.userBilling.userBillingAddress;
      this.billingAddress.billingAddressStreet = userPayment.userBilling.userBillingStreet;;
      this.billingAddress.billingAddressCity = userPayment.userBilling.userBillingCity;
      this.billingAddress.billingAddressProvince = userPayment.userBilling.userBillingProvince;
      this.billingAddress.billingAddressPostalCode = userPayment.userBilling.userBillingPostalCode;
    }

    setBillingAsDelivery(checked:boolean){
      console.log("same as delivery")
  
      if(checked) {
        this.billingAddress.billingAddress = this.deliveryAddress.deliveryAddress;
        this.billingAddress.billingAddressStreet = this.deliveryAddress.deliveryAddressStreet;
        this.billingAddress.billingAddressCity = this.deliveryAddress.deliveryAddressCity;
        this.billingAddress.billingAddressProvince = this.deliveryAddress.deliveryAddressProvince;
        this.billingAddress.billingAddressPostalCode = this.deliveryAddress.deliveryAddressPostalCode;
      } else {
        this.billingAddress.billingAddress = "";
        this.billingAddress.billingAddressStreet = "";
        this.billingAddress.billingAddressCity = "";
        this.billingAddress.billingAddressProvince = "";
        this.billingAddress.billingAddressPostalCode = "";
      }
    }

    onSubmit(){
      this.checkoutService.checkout(
        this.deliveryAddress,
        this.billingAddress,
        this.payment
        ).subscribe(
        res=>{
          this.order=res.json();
          console.log(this.order);
  
          let navigationExtras: NavigationExtras = {
              queryParams: {
                  "order": JSON.stringify(this.order)
              }
          };
  
          this.router.navigate(['/orderSummary'], navigationExtras);
        },
        error=>{
          console.log(error.text());
        }
        );
      }
  
      ngOnInit() {
        this.getCartItemList();
  
  
        this.cartService.getShoppingCart().subscribe(
          res=>{
            console.log(res.json());
            this.shoppingCart=res.json();
          },
          error=>{
            console.log(error.text());
          }
          );
  
        this.deliveryService.getUserDeliveryList().subscribe(
          res=>{
            console.log(res.json());
            this.userDeliveryList=res.json();
            if(this.userDeliveryList.length) {
              this.emptyDeliveryList = false;
  
              for (let userDelivery of this.userDeliveryList) {
                if(userDelivery.userDeliveryDefault) {
                  this.setDeliveryAddress(userDelivery);
                  return;
                }
              }
            }
          },
          error=>{
            console.log(error.text());
          }
          );
  
        this.paymentService.getUserPaymentList().subscribe(
          res=>{
            console.log(res.json());
            this.userPaymentList=res.json();
            this.emptyPaymentList = false;
  
            if(this.userPaymentList.length) {
              this.emptyPaymentList = false;
  
              for (let userPayment of this.userPaymentList) {
                if(userPayment.defaultPayment) {
                  this.setPaymentMethod(userPayment);
                  return;
                }
              }
            }
          },
          error=>{
            console.log(error.text());
          }
          );
  
        for (let s in SAcon.saProvince) {
          this.provinceList.push(s);
        }
  
        this.payment.type="";
        this.payment.expiryMonth="";
        this.payment.expiryYear="";
        this.billingAddress.billingAddressProvince="";
        this.deliveryAddress.deliveryAddressProvince="";
      }
}
  