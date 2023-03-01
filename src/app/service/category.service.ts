import { Injectable } from '@angular/core';
import { Category } from '../class/category.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private dataService:DataService) { }

  categoryArray:Category[] = [];

  SetCategories(myCategories:Category[]){
    this.categoryArray=myCategories;
  }

  LoadCategories() {
    return this.dataService.GetCategories();
  }

  NewCategory(category:Category) {
    this.categoryArray.push(category);
    this.dataService.SendCategory(this.categoryArray);
  }

  UbicatedCategory(index:number){
    let category:Category=this.categoryArray[index];
    return category;
  }

  ModificatedCategory(index:number,category:Category) {
    let categoryModificated = this.categoryArray[index];

    categoryModificated.name = category.name;
    categoryModificated.characteristics = category.characteristics;

    this.dataService.UpdateCategory(index,category);
  }

  EliminateCategory(index:number){
    this.categoryArray.splice(index,1);
    this.dataService.DeleteCategory(index);
    this.dataService.SendCategory(this.categoryArray);
  }

}
