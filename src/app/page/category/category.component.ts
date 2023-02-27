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

  constructor(private categoryService:CategoryService, private route:ActivatedRoute){}

  DeleteMyCategory(index:number) {


    this.categoryService.EliminateCategory(index);
    // location.reload();

    console.log(index);
  }

  ngOnInit() {
    // !load the database:
    this.categoryService.LoadCategories().subscribe(myCategories=>{
    console.log(myCategories)
    this.categoryArray = Object.values(myCategories);
    this.categoryService.setCategories(this.categoryArray);
    });
    // END BLOCK //

    // this.index=this.route.snapshot.params['id'];
    // let mycategory:Category=this.categoryService.UbicatedCategory(this.index);
  }
  categoryArray:Category[] = [];
  // index:number = 0;
}
