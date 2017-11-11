import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { SystemConstants } from './../../commons/system.constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private headers: Headers;

  constructor(private _http: Http, private _router: Router) {
    console.log(JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)).access_token);
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization',
      `${JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)).access_token}`);
  }

  get(url: string) {
    return this._http.get(SystemConstants.BASE_API + url, { headers: this.headers }).map(this.extracData);
  }

  post(url: string, data?: any) {
    return this._http.post(SystemConstants.BASE_API + url, data, { headers: this.headers }).map(this.extracData);
  }

  put(url: string, data?: any) {
    return this._http.put(SystemConstants.BASE_API + url, data, { headers: this.headers }).map(this.extracData);
  }

  delete(url: string, key: string, id: string) {

    return this._http.delete(`${SystemConstants.BASE_API + url}?${key}=${id}`, { headers: this.headers }).map(this.extracData);

  }
  private extracData(res: Response) {
    const body = res.json();
    return body || {};
  }
}
