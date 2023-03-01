import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Category } from '../class/category.model';
import { Product } from '../class/product.model';
import { User } from '../class/user.model';

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
    let url = 'https://arteriadb-default-rtdb.firebaseio.com/products/'+index+'/.json';

    this.httpClient.put(url, product).subscribe(
      response=>console.log('producto actualizado con: ' + response),
      error=>console.log('ERROR: ' + error)
    );
  }

  DeleteProducts (index:number) {
    let url = 'https://arteriadb-default-rtdb.firebaseio.com/products/'+index+'/.json';

    this.httpClient.delete(url).subscribe(
      response=>console.log('producto eliminado con: ' + response),
      error=>console.log('ERROR: ' + error)
    );
  }

  // End products

  // Start Users

  GetUsers () {
    return this.httpClient.get('https://arteriadb-default-rtdb.firebaseio.com/users.json');
  }

  SendUsers (user:User[]) {
    this.httpClient.put('https://arteriadb-default-rtdb.firebaseio.com/users.json',user).subscribe(
      response=>console.log('usuario creado con: ' + response),
      error=>console.log('ERROR: ' + error)
    );
  }

  UpdateUser (index:number, user:User) {
    let url = 'https://arteriadb-default-rtdb.firebaseio.com/users/'+index+'/.json';

    this.httpClient.put(url,user).subscribe(
      response=>console.log('usuario actualizado con: ' + response),
      error=>console.log('ERROR: ' + error)
    );
  }

  DeleteUser (index:number) {
    let url = 'https://arteriadb-default-rtdb.firebaseio.com/users/'+index+'/.json';

    this.httpClient.delete(url).subscribe(
      response=>console.log('usuario eliminado con: ' + response),
      error=>console.log('ERROR: ' + error)
    );
  }

  // End USers
}
