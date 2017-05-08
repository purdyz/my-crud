import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  title: string;
  user: user;
  users=[];

  constructor() {
    this.title = 'My CRUD';

  }

  addUser(){
    let x = (<HTMLInputElement>document.getElementById("name")).value;
    let y = (<HTMLInputElement>document.getElementById("age")).value;

    if(x == '' || y == '') {
      alert("You must enter a value in both fields!");
      return false;
    }

    this.user = {
      name: x,
      age: parseInt(y)
    }
    
    console.log(this.user.name + " has been added!");
    this.users.push(this.user);

    (<HTMLInputElement>document.getElementById("name")).value = '';
    (<HTMLInputElement>document.getElementById("age")).value = '';
  }

  deleteUser(i) {
    this.users.splice(i,1);

  }

}

interface user {
  name: string;
  age: number;
}
