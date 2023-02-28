import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Category } from '../class/category.model';
import { Product } from '../class/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

// Start categories

  GetCategories(){
    return this.httpClient.get('https://arteriadb-default-rtdb.firebaseio.com/categories.json');
  }

  SendCategory(category:Category[]) {
    this.httpClient.put('https://arteriadb-default-rtdb.firebaseio.com/categories.json', category).subscribe(

      response=>console.log('categoria creada con: ' + response),

      error=>console.log('ERROR: ' + error)


    );
  }

  UpdateCategory(index:number, category:Category) {
    let url = 'https://arteriadb-default-rtdb.firebaseio.com/categories/'+index+'/.json';

    this.httpClient.put(url,category).subscribe(

    response=>console.log('la categoria se ha actualizado: ' + response),

    error=>console.log('ERROR: ' + error)
    );
  }

  DeleteCategory(index:number) {
    let url = 'https://arteriadb-default-rtdb.firebaseio.com/categories/'+index+'/.json';

    this.httpClient.delete(url).subscribe(

    response=>console.log('la categoria se ha eliminado: ' + response),

    error=>console.log('ERROR: ' + error)
    );
  }

  // End categories

  // Start products

  GetProducts () {
    return this.httpClient.get('https://arteriadb-default-rtdb.firebaseio.com/products.json');
  }

  SendProducts (product:Product[]) {
    this.httpClient.put('https://arteriadb-default-rtdb.firebaseio.com/products.json',product).subscribe(

      response=>console.log('producto creado con: ' + response),

      error=>console.log('ERROR: ' + error)
    );
  }

  UpdateProducts (index:number, product:Product) {
    let url = 'https://arteriadb-default-rtdb.firebaseio.com/categories/'+index+'/.json';

    this.httpClient.put(url, product).subscribe(

      response=>console.log('producto actualizado con: ' + response),

      error=>console.log('ERROR: ' + error)
      
    );
  }

  DeleteProducts () {

  }

  // End products
}
