import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { UserComponent } from './page/user/user.component';

import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './page/product/product.component';
import { SaleComponent } from './page/sale/sale.component';
import { CategoryComponent } from './page/category/category.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

import { DataService } from './service/data.service';
import {HttpClientModule} from '@angular/common/http';
import { NewUserComponent } from './page/user/new-user/new-user.component';
import { NewSaleComponent } from './page/sale/new-sale/new-sale.component';
import { NewProductComponent } from './page/product/new-product/new-product.component';
import { NewCategoryComponent } from './page/category/new-category/new-category.component';
import { HomeComponent } from './page/home/home.component';
export const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserComponent,
    ProductComponent,
    SaleComponent,
    CategoryComponent,
    NewUserComponent,
    NewSaleComponent,
    NewProductComponent,
    NewCategoryComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
