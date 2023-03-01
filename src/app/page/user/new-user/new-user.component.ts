import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  
  name:string = "";
  lastName:string = "";
  address:string = "";
  phone:string = "";
  email:string = "";
  rol:string = "";
  username:string = "";
  password:string = "";

  userArray:User[] = []

  index:number = 0; 
  action!: number;
  classBtn:string = "";
  contentBtn:string = "";

  constructor (
    private userService:UserService,
    private route:ActivatedRoute
  ) {}

  btnAction () {
    if (this.action == 0) {
      let user = new User(this.name, this.lastName, this.address, this.phone, this.email, this.rol, this.username, this.password);
      this.userService.NewUser(user);
      alert('se ha creado el usuario ' + user.name);
      window.location.href = "/users";
    } else {
      let user =  new User(this.name, this.lastName, this.address, this.phone, this.email, this.rol, this.username, this.password);
      this.userService.ModificateUser(this.index,user),
      alert('se ha modificado el usuario ' + user.name);
      window.location.href = "/users";
    }

  }

  ngOnInit () {
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
    let user:User=this.userService.UbicateUser(this.index);

    //assing the value of each var according to the selected id
    this.name = user.name;
    this.lastName = user.lastName;
    this.address = user.address;
    this.phone = user.phone;
    this.email = user.email;
    this.rol = user.rol;
    this.username = user.username;
    this.password = user.password;
  }
}
