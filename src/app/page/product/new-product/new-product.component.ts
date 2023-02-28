import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  index:number = 0;

  product:string = '';
  trademark:string = '';
  categorySelected:string = '';
  date:string = '';
  description:string = '';
  price:number = 0;

  categoryOption:Category[] = [];

  action!:number;
  classBtn:string = '';
  contentBtn:string = '';

  constructor (private productService:ProductService ,private categoryService:CategoryService, private route:ActivatedRoute) {}

  ActionButton () {
    if (this.action == 0) {

      let product = new Product(this.product,this.trademark,this.categorySelected,this.date,this.description,this.price);
      this.productService.NewProduct(product);
      alert('producto creado');
      window.location.href = '/products';

    } else {

      let product = new Product(this.product,this.trademark,this.categorySelected,this.date,this.description,this.price);
      this.productService.ModificateProduct(this.index,product)
      alert('producto modificado');
      window.location.href = '/products';

    }
  }

  ngOnInit () {
    this.action=this.route.snapshot.queryParams['action'];
    if (this.action == 0) {
      this.classBtn = "btn btn-primary mx-1";
      this.contentBtn = "Agregar";
    } else if (this.action == 1) {
      this.classBtn = 'btn btn-success mx-1';
      this.contentBtn = "Modificar";
    }

    this.categoryService.LoadCategories().subscribe(categories=>{
      console.log(categories);
      this.categoryOption = Object.values(categories);
      this.categoryService.SetCategories(this.categoryOption);
    })

    this.index = this.route.snapshot.params['id'];
    let product:Product = this.productService.UbicateProduct(this.index); 

    this.product = product.name_prod;
    this.trademark = product.trademark;
    this.categorySelected = product.category;
    this.date = product.date;
    this.description = product.description_prod;
    this.price = product.price;
  }

  
}
