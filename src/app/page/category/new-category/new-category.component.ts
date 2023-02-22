import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { NgModel } from '@angular/forms';
import { Category } from 'src/app/class/category.model';
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent {
category: string = '';
description: string = '';
  
  constructor(private categoryService:CategoryService){}

  CreateCategory() {
    let myCategory = new Category(this.category,this.description);
    this.categoryService.NewCategory(myCategory);
  }
}
