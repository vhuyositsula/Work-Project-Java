import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';

import { AuthGuardService } from './services/auth-guard.service';
//import { ProductTrolleyComponent } from './store/product-trolley/product-trolley.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: "product-details/:id", component: ProductDetailsComponent},
      {path: 'myProfile', component: MyProfileComponent },
      {path: 'addPayment', component: PaymentComponent },
      {path: 'product-list', component: ProductListComponent },
      {path: 'login', component: LoginComponent },
      {path: 'forgetpwd', component: FpasswordComponent },
      {path: 'registration', component: RegistrationComponent },
      {path: 'access-denied', component: AccessDeniedComponent },
      {path: 'cart', component: ShoppingCartComponent },
      {path: 'checkout', component: OrderComponent },  
       {path: 'orderSummary', component: OrderSummaryComponent },
      
      {path: '**', redirectTo: '/home'}
      ])],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
