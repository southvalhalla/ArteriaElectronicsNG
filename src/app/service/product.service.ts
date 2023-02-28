import { Injectable } from '@angular/core';
import { Category } from '../class/category.model';
import { Product } from '../class/product.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataServise:DataService) { }

  productArray:Product[] = [];

  SetProducts (products:Product[]) {
    this.productArray = products;
  }

  LoadProducts () {
    return this.dataServise.GetProducts();
  }

  NewProduct (product:Product) {
    this.productArray.push(product);
    this.dataServise.SendProducts(this.productArray);
  }

  UbicateProduct (index:number) {
    let product:Product = this.productArray[index];
    return product;
  }

  ModificateProduct (index:number,product:Product) {
    let productModificated = this.productArray[index];
    productModificated.name_prod = product.name_prod;
    productModificated.trademark = product.trademark;
    productModificated.category = product.category;
    productModificated.date = product.date;
    productModificated.description_prod = product.description_prod;
    productModificated.price  = product.price ;

    this.dataServise.UpdateProducts(index,product);
  }
}
