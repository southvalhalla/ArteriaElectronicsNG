import { Injectable } from '@angular/core';
import { Category } from '../class/category.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  

  constructor(private dataService:DataService) { }

  category:Category[] = [];

  NewCategory(category:Category) {
    
    this.category.push(category);
    this.dataService.CreateCategory(this.category);
  }
}
