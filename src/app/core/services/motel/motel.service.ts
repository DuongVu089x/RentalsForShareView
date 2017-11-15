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

  insert(data: Motel) {
    return new Promise((resolve, reject) => {
      this._dataservice.post('api/motel/insert', data)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  update(data: Motel) {
    return new Promise((resolve, reject) => {
      this._dataservice.put(`api/motel/update?id=${data.id}`, data)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  delete(id: number) {
    return new Promise((resovle, reject) => {
      this._dataservice.delete('/api/motel/delete', 'id', id)
        .subscribe((res) => {
          resovle(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
