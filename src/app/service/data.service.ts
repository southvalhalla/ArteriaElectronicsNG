import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Category } from '../class/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  CreateCategory(category:Category[]) {
    this.httpClient.post('https://arteriadb-default-rtdb.firebaseio.com/categories/data.json', category).subscribe(

      response=>console.log('categoria creada con: ' + response),

      error=>console.log('ERROR: ' + error)


    );
  }
}
