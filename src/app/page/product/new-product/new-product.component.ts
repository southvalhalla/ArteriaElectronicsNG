import { Component } from '@angular/core';
import { Category } from 'src/app/class/category.model';
import { Product } from 'src/app/class/product.model';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  
  categoryOption:Category[] = [];

  constructor (private productService:ProductService ,private categoryService:CategoryService) {}

  CreateProduct(){
    let product = new Product(this.product,this.trademark,this.categorySelected,this.date,this.description,this.price);
    this.productService.newProduct(product);
    alert('producto creado');
    window.location.href = '/products';
  }

  ngOnInit () {
    this.categoryService.LoadCategories().subscribe(categories=>{
      console.log(categories);
      this.categoryOption = Object.values(categories);
      this.categoryService.setCategories(this.categoryOption);
    })
  }

  prod:string = '';

  product:string = '';
  trademark:string = '';
  categorySelected:string = '';
  date:string = '';
  description:string = '';
  price:number = 0;
}
