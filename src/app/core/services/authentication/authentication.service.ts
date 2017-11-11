import { SystemConstants } from './../../commons/system.constants';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private _http: Http) { }

  login(user) {
    return new Promise((resolve, reject) => {
      this._http.post(`${SystemConstants.BASE_API}/api/customer/login`, user)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }
}
