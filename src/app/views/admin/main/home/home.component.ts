import { MotelDataSource } from './../../../../core/datasource/motel.datasource';
import { MotelService } from './../../../../core/services/motel/motel.service';
import { ShareDialogUserComponent } from './../../shared/share-dialog-user/share-dialog-user.component';
import { MdDialog, MdPaginator } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['id', 'address', 'title', 'price', 'actions'];
  dataSource: MotelDataSource | null;
  totalPage: number = 0;

  @ViewChild('filter') filter: ElementRef;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(public dialog: MdDialog, private motelService: MotelService) { }

  ngOnInit() {
    this.dataSource = new MotelDataSource(this.motelService, this.paginator);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
    this.getTotalPage(this.filter.nativeElement.value);
  }

  getTotalPage(keyword: String) {
    this.motelService.getTotalPage(keyword)
      .then((res: any) => {
        this.totalPage = res;
      }, (err) => {

      })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShareDialogUserComponent, {
      height: '100 %'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onPaginateChange(event) {
    const startIndex = event.pageIndex * event.pageSize;
    console.log(startIndex);

    this.dataSource = new MotelDataSource(this.motelService, this.paginator);

  }
}

