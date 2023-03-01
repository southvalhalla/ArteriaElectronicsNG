import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/class/category.model';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent {
  category: string = '';
  description: string = '';

  categoryArray:Category[] = [];
  index:number = 0; 
  action!: number;
  classBtn:string = "";
  contentBtn:string = "";
  
  constructor(
    private categoryService:CategoryService,
    private route:ActivatedRoute,
    ){}

  ActionButton() {
    if (this.action == 0) {// Add

      let myCategory = new Category(this.category,this.description);
      this.categoryService.NewCategory(myCategory);
      alert('se ha creado la categoria ' + myCategory.name);
      window.location.href = "/categories";

    }else {// Modificate
    
      let myCategory = new Category(this.category,this.description);
      this.categoryService.ModificatedCategory(this.index,myCategory);
      alert('se ha actualizado la categoria ' + myCategory.name);
      window.location.href = "/categories";

    }
  }

  ngOnInit(): void {
    //get value of var action and assign value to var classBtn and var contentBtn according to the value of var action.
    this.action=this.route.snapshot.queryParams['action'];
    if (this.action == 0) {
      this.classBtn = "btn btn-primary mx-1";
      this.contentBtn = "Agregar";
    } else if (this.action == 1) {
      this.classBtn = 'btn btn-success mx-1';
      this.contentBtn = "Modificar";
    }
    //get the id and ubication
    this.index=this.route.snapshot.params['id'];
    let mycategory:Category=this.categoryService.UbicatedCategory(this.index);

    //assing the value of each var according to the selected id
    this.category=mycategory.name;
    this.description=mycategory.characteristics;

  }
}
