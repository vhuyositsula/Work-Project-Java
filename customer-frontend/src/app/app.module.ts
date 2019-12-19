import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTabsModule,MatButtonModule,MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { PaymentService } from './services/payment.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import {OrderService} from './services/order.service';
import {CheckoutService} from './services/checkout.service';
import { DataTableModule } from 'angular2-datatable';
import { DataFilterPipe } from './product-list/data-filter.pipe';


import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTablesModule } from 'angular-datatables';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';
import { JwtInterceptor } from './helpers/jwt.Interceptor';
import { AuthGuardService } from './services/auth-guard.service';
//import { ProductTrolleyComponent } from './store/product-trolley/product-trolley.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import 'hammerjs';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DeliveryService } from './services/delivery.service';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AccessDeniedComponent,
   // ProductTrolleyComponent,
    FpasswordComponent,
    ProductListComponent,
    MyProfileComponent,
    PaymentComponent,
    DataFilterPipe,
    ProductDetailsComponent,
    ShoppingCartComponent,
    OrderComponent,
    OrderSummaryComponent
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    DataTablesModule ,
    NgbModule,
    DataTableModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule
    
    
    
  ],
  providers: [
    LoginService,
    UserService,
    AuthGuardService,
    ProductService,
    PaymentService,
    CartService,
    DeliveryService,
    OrderService,
    CartService,
    CheckoutService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
