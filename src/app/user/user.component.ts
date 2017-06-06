import { Component, OnInit } from '@angular/core';
import { UserService } from '/home/zack/Documents/my-crud/src/app/user.service';

import { User } from '/home/zack/Documents/my-crud/src/app/user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  users: User[];
  title: string;
  active = true;
  errorMessage: string;

  constructor(private _exampleService: UserService) {

  }

  ngOnInit(){
    this.title = this._exampleService.hello();
    this.getUsers();
  }

  getUsers(){
    this._exampleService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      );
  }

  addUser(name: string, age: number){
    let myUser = new User(name, age);
    this._exampleService.users.push(myUser);
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }

  deleteUser(i) {
    this._exampleService.users.splice(i,1);
  }

}
