import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {User} from './models/User';
import {UsersService} from './service/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userList: User[];

  userId: string;

  user: User;

  userForm: FormGroup;

  constructor(private userService: UsersService, private formBuilder: FormBuilder) {
    this.userService.getUsers().subscribe(value => {
      this.userList = value;
    });
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [null, [Validators.pattern('^[0-9]+$'), Validators.min(1)]],
      name: [null, [Validators.minLength(3), Validators.pattern('^[A-Z][a-zA-Z]{2,}(?: [A-Z][a-zA-Z]*){0,2}$')]],
      username: [null, [Validators.pattern('^[A-Z][a-zA-Z]{2,}(?: [A-Z][a-zA-Z]*){0,2}$'), Validators.minLength(3)]],
      email: [null, [Validators.email, Validators.pattern('^[A-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: [null, [Validators.minLength(10), Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]],
      website: [null, [Validators.pattern('^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$')]]
    });
  }

  getUser(): void {
    this.userService.getUser(this.userId).subscribe(user => this.user = user);
  }

  alertUser(): void {
    this.userService.getUserPost(this.userId).subscribe(posts => {
      for(let post of posts)
      {alert(`${post.id} - ${post.title}`)}}) ;
    // this.userService.getUser(4).subscribe(user => alert(`${user.name}, ${user.website}, ${user.username}`));
  }
}
