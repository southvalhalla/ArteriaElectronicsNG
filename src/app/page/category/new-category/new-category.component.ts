import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Category } from 'src/app/class/category.model';
 
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent {
  category: string = '';
  description: string = '';
  

  constructor(private categoryService:CategoryService, private route:ActivatedRoute){}
  
  CreateCategory() {
    let myCategory = new Category(this.category,this.description);
    this.categoryService.NewCategory(myCategory);
    alert('se ha creado la categoria ' + myCategory.name);
    window.location.href = "/categories";
  }

  UpdateMyCategory() {
    let myCategory = new Category(this.category,this.description);
    this.categoryService.ModificatedCategory(this.index,myCategory);
    alert('se ha actualizado la categoria ' + myCategory.name);
    window.location.href = "/categories";
  }

  ActionButton() {
    if (this.action == 0) {

      
      

      let myCategory = new Category(this.category,this.description);
      this.categoryService.NewCategory(myCategory);
      alert('se ha creado la categoria ' + myCategory.name);
      window.location.href = "/categories";
    }else {
      
      

      let myCategory = new Category(this.category,this.description);
      this.categoryService.ModificatedCategory(this.index,myCategory);
      alert('se ha actualizado la categoria ' + myCategory.name);
      window.location.href = "/categories";
    }
  }

  

  ngOnInit(): void {
    this.categoryService.LoadCategories().subscribe(myCategories=>{
      console.log(myCategories)
      this.categoryArray = Object.values(myCategories);
      this.categoryService.setCategories(this.categoryArray);

    });
    
    this.action=this.route.snapshot.queryParams['action'];

    this.index=this.route.snapshot.params['id'];
    let mycategory:Category=this.categoryService.UbicatedCategory(this.index);

    this.category=mycategory.name;
    this.description=mycategory.characteristics;

  }
  

  categoryArray:Category[] = [];
  index:number = 0; 
  action: number = 0;

  
}
