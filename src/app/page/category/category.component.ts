import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Category } from 'src/app/class/category.model';
import { CategoryService } from 'src/app/service/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private categoryService:CategoryService){}

  DeleteMyCategory(index:number) {
    this.categoryService.EliminateCategory(index);
    // console.log(index);
  }

  ngOnInit() {
    // load table categories
    this.categoryService.LoadCategories().subscribe(myCategories=>{
      console.log(myCategories);
      this.categoryArray = Object.values(myCategories);
      this.categoryService.SetCategories(this.categoryArray);
    });
    ////
  }
  categoryArray:Category[] = [];
}
