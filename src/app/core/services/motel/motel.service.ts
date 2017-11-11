import { Motel } from './../../models/motel.models';
import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MotelService {

  constructor(private _dataservice: DataService) { }

  getListMotelsByPageAndKeyWord(page: number, keyword: string) {
    return new Promise((resolve, reject) => {
      this._dataservice.post(`/api/motel/get-by-page-and-keyword?page=${page}&keyword=${keyword}`, null)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
