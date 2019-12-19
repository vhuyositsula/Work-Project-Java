import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule, MatDialogModule, MatListModule,MatSlideToggleModule,
        MatButtonModule,MatInputModule,MatGridListModule,MatSelectModule,}
from '@angular/material';

import { LoginService } from './services/login.service';
import { AddProductService } from './services/add-product.service';
import { UploadImageService } from './services/upload-image.service';
import { GetProductListService } from './services/get-product-list.service';
import { GetProductService } from './services/get-product.service';
import { EditProductService } from './services/edit-product.service';
import { RemoveProductService } from './services/remove-product.service';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductListComponent, DialogResultExampleDialog } from './product-list/product-list.component';
import { ViewProductComponent } from './view-product/view-product.component';

import 'hammerjs';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavBarComponent,
    LoginComponent,
    AddNewProductComponent,
    ProductListComponent,
    DialogResultExampleDialog,
    ViewProductComponent,
    EditProductComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    DataTablesModule ,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatListModule,
    MatDialogModule
    
    
  ],
  providers: [
    LoginService,
    AddProductService,
    UploadImageService,
    GetProductListService,
    GetProductService,
    EditProductService,
    RemoveProductService
   ],
  bootstrap: [AppComponent,DialogResultExampleDialog]
})
export class AppModule { }
