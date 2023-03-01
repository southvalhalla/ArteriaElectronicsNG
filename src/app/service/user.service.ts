import { Injectable } from '@angular/core';
import { User } from '../class/user.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArray:User[] = [];

  constructor(private dataService:DataService) { }

  SetUsers (user:User[]) {
    this.userArray=user;
  }

  LoadUsers () {
    return this.dataService.GetUsers();
  }

  NewUser (user:User) {
    this.userArray.push(user);
    this.dataService.SendUsers(this.userArray);
  }

  UbicateUser (index:number) {
    let user:User = this.userArray[index];
    return user;
  }

  ModificateUser (index:number, user:User) {
    let userModificated = this.userArray[index];
    
    userModificated.name = user.name;
    userModificated.lastName = user.lastName;
    userModificated.address = user.address;
    userModificated.phone = user.phone;
    userModificated.email = user.email;
    userModificated.rol = user.rol;
    userModificated.username = user.username;
    userModificated.password = user.password;

    this.dataService.UpdateUser(index,user);
  }
  EliminateUser(index:number) {
    this.userArray.splice(index,1);
    this.dataService.DeleteUser(index);
    this.dataService.SendUsers(this.userArray);
  }
}
