import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Motel } from './../../models/motel.models';
import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.models';

@Injectable()
export class MotelService {


  dataChange: BehaviorSubject<Motel[]> = new BehaviorSubject<Motel[]>([]);

  constructor(private _dataservice: DataService) { }

  get data(): Motel[] {
    return this.dataChange.value;
  }

  addUser(page: number) {
    this.getListMotelsByPageAndKeyWord(page + 1, "")
      .then((res: any) => {
        this.dataChange.next(res.content);
      });
  }

  getDataByUsernameByPageAndKeyWord(page: number, keyword: string) {
    this.getListMotelsOfUserByPageAndKeyword(page + 1, keyword)
      .then((res: any) => {
        this.dataChange.next(res.content);
      })
  }

  getTotalPage(keyword: String) {
    return new Promise((resolve, reject) => {
      this._dataservice.post(`/api/motel/get-total-page?keyword=${keyword}`, null)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getById(id: number) {
    return new Promise((resolve, reject) => {
      this._dataservice.post(`/api/motel/get-by-id?id=${id}`, null)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    });
  }

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

  getListMotelsOfUserByPageAndKeyword(page: number, keyword: string) {
    return new Promise((resolve, reject) => {
      this._dataservice.post(`/api/motel/get-by-user-page-and-keyword?page=${page}&keyword=${keyword}`, null)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    });
  }

  insert(data: Motel) {
    return new Promise((resolve, reject) => {
      this._dataservice.post('/api/motel/insert', JSON.stringify(data))
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  update(data: Motel) {
    return new Promise((resolve, reject) => {
      this._dataservice.put(`/api/motel/update?id=${data.id}`, data)
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
