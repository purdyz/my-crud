import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {

  constructor(private _http: Http) {}

  getUsers(): Observable<Array<any>> {
    return this._http
      .get('/assets/users.json')
      .map((response: Response) => response.json());
  }

  hello(){
    return 'This is a service!';
  }

}
