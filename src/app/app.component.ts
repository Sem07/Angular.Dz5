
import { Component } from '@angular/core';
import { User } from './models/User';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList: User[] = [];
  usernam: string = '';
  constructor(private userService: UsersService){
    this.userService.getUsers().subscribe(value => this.userList = value)
  };
  x(){console.log(this.usernam)};
  y(){console.log(this.userList)};
  z(id){console.log(id)}
}
