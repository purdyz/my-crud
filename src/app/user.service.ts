import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

  users = [
    {name: "Zack", age: 26},
    {name: "Erika", age: 27},
    {name: "Adam", age: 28}
  ];

  constructor() {

  }

  hello(){
    return 'This is a service!';
  }

}
