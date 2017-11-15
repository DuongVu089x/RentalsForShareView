import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotelService } from './../../../core/services/motel/motel.service';
import { Motel } from './../../../core/models/motel.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // artiles = [
  //   {
  //     'urlTile': 'https://photo2.tinhte.vn/data/attachment-files/2017/08/4119945_cv-ipad.jpg',
  //     'title': '[Review] iPad Pro 10.5 + Smart Keyboard đã làm mình muốn rời xa MacBook Pro'
  //   }
  // ];

  private page: number;

  public motels: Array<Motel>[];

  constructor(private _motelService: MotelService) {
    this.motels = new Array;
  }

  ngOnInit() {
    this.page = 1;
    this.loadMotelsByPageAndKeyword(this.page, '');
  }

  onScroll() {
    this.loadMotelsByPageAndKeyword(this.page, '');
  }

  loadMotelsByPageAndKeyword(page: number, keyword: string): void {
    this._motelService.getListMotelsByPageAndKeyWord(page, keyword)
      .then((res: any) => {
        if (res.content !== undefined && res.content != null) {
          this.page++;
          this.motels = this.motels.concat(res.content);
        }
      }, (err) => {
        console.log(err);
      });
  }
}
