import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './page/category/category.component';
import { NewCategoryComponent } from './page/category/new-category/new-category.component';
import { HomeComponent } from './page/home/home.component';
import { NewProductComponent } from './page/product/new-product/new-product.component';
import { ProductComponent } from './page/product/product.component';
import { NewSaleComponent } from './page/sale/new-sale/new-sale.component';
import { SaleComponent } from './page/sale/sale.component';
import { NewUserComponent } from './page/user/new-user/new-user.component';
import { UserComponent } from './page/user/user.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: "users", component:UserComponent},
  {path: "users/user", component:NewUserComponent},
  {path: "categories", component:CategoryComponent},
  {path: 'categories/category', component:NewCategoryComponent},
  {path: 'categories/category/:id', component:NewCategoryComponent},
  {path: "products", component:ProductComponent},
  {path: "products/product", component:NewProductComponent},
  {path: "products/product/:id", component:NewProductComponent},
  {path: "sales", component:SaleComponent},
  {path: "sales/sale", component:NewSaleComponent},
  {path: "**", redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
