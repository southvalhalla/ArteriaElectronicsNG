import { Component } from '@angular/core';
import { Product } from 'src/app/class/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  constructor (private productService:ProductService) {}

  ngOnInit () {
    // Load products
    this.productService.LoadProducts().subscribe(myProduct=>{
      console.log(myProduct);
      this.productArray = Object.values(myProduct);
      this.productService.SetProducts(this.productArray);
    })
  }

  productArray:Product[] = [];
}
