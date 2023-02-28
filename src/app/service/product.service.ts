import { Injectable } from '@angular/core';
import { Product } from '../class/product.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataServise:DataService) { }

  productArray:Product[] = [];

  setProducts (products:Product[]) {
    this.productArray = products;
  }

  loadProducts () {
    return this.dataServise.GetProducts();
  }

  newProduct (product:Product) {
    this.productArray.push(product);
    this.dataServise.SendProducts(this.productArray);
  }
}
