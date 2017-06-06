import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()

export class UserService {

  users = [
    {
        "name" : "Zack",
        "age" : 26
    },
    {
        "name" : "Erika",
        "age" : 27
    },
    {
        "name" : "Adam",
        "age" : 28
    }
    ];

  constructor(private _http: Http) {
    this.getUsers();
  }

  getUsers(): Observable<User[]> {
    return this._http
      .get('/users')
      .map((response: Response) => response.json());
  }

  hello(){
    return 'This is a service!';
  }

}
