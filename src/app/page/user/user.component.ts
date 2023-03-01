import { Component } from '@angular/core';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userArray:User[] = [];

  constructor (private userService:UserService) {}

  DeletedUser (index:number) {
    this.userService.EliminateUser(index)
  }

  ngOnInit () {
    // load table user
    this.userService.LoadUsers().subscribe(user=>{
      console.log(user);
      this.userArray = Object.values(user);
      this.userService.SetUsers(this.userArray);
    });
  }

}
