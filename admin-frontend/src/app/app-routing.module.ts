import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      {path: '', component: LoginComponent, pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'addNewProduct', component: AddNewProductComponent},
      {path: 'productList', component: ProductListComponent },
      {path: 'viewProduct/:id', component: ViewProductComponent },
      {path: 'editProduct/:id', component: EditProductComponent },
      
      {path: '**', redirectTo: '/login'}
      ])],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
