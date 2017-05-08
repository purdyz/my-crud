import { Component, OnInit } from '@angular/core';
import { UserService } from '/home/zack/Documents/my-crud/src/app/user.service';

import { User } from '/home/zack/Documents/my-crud/src/app/user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  title: string;
  active = true;

  constructor(private _exampleService: UserService) {

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

  ngOnInit(){
    this.title = this._exampleService.hello();
  }

}
