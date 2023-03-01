import { Injectable } from '@angular/core';
import { Product } from '../class/product.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productArray:Product[] = [];

  constructor(private dataServise:DataService) { }

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

  EliminateProduct (index:number) {
    this.productArray.splice(index,1);
    this.dataServise.DeleteProducts(index);
    this.dataServise.SendProducts(this.productArray);
  }
}
