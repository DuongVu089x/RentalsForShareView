import { ClassMotel } from './../../../../core/models/motel.class.models';
import { UrlConstants } from './../../../../core/commons/url.constants';
import { Motel } from './../../../../core/models/motel.models';
import { SystemConstants } from './../../../../core/commons/system.constants';
import { MotelService } from './../../../../core/services/motel/motel.service';
import { UserMotelDataSource } from './../../../../core/datasource/user/motel.datasource';
import { Component, ViewChild, OnInit, ElementRef, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator, MdDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Button } from 'selenium-webdriver';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

const URL = `${SystemConstants.BASE_API}${UrlConstants.UPLOADAPI}`


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'address', 'title', 'price', 'actions'];
  dataSource: UserMotelDataSource | null;
  uploader: FileUploader = new FileUploader({ url: URL });
  hasBaseDropZoneOver = false;
  motel: Motel;
  message: string;
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild('btnDelete') btnDetele: ElementRef;

  url;
  id = -1;
  listFilePreviewPath: SafeUrl[];
  filePreviewPath: SafeUrl;

  constructor(public dialog: MdDialog, private sanitizer: DomSanitizer, private motelService: MotelService) {
    this.listFilePreviewPath = [];

    this.uploader.onAfterAddingFile = (fileItem) => {
      this.filePreviewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
      this.listFilePreviewPath.push(this.filePreviewPath);
    };

  }

  ngOnInit() {
    $(document).ready(function () {
      $('.modal').modal();
    });
    this.dataSource = new UserMotelDataSource(this.motelService, this.paginator, JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)).access_token);
  }
  ngAfterViewInit(): void {

  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public getMotel(motel: Motel): void {
    this.motel = motel;
  }

  public deleteMotel(id: number): void {
    this.motelService.delete(id)
      .then((res: any) => {
        this.message = res.result;
        this.dataSource = new UserMotelDataSource(this.motelService, this.paginator, JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)).access_token);
      }, (err: any) => {
        this.message = err.result;
      })
      .catch(err => {

      })
  }

  removeFile(index: number): void {
    this.uploader.queue[index].remove();
    this.listFilePreviewPath.splice(index, 1);
  }

  public changeOrInsertMotel(): void {
    if (this.motel.id != null) {
      this.changeMotel();
    } else {
      this.insertMotel();
    }
  }

  public insertMotel(): void {
    console.log(this.motel);
    this.motelService.insert(this.motel)
      .then((res: any) => {
        this.message = res.result;
        this.dataSource = new UserMotelDataSource(this.motelService, this.paginator, JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)).access_token);
        setTimeout(() => { $('#modal').modal('close') }, 1000);
      }, (err) => {
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  public showInsert(): void {
    this.motel = new ClassMotel();
  }

  public changeMotel(): void {
    this.motelService.update(this.motel)
      .then((res: any) => {
        this.message = `${res.result} ${this.motel.id}`;
        setTimeout(() => { $('#modal').modal('close') }, 1000);
      }, (err) => {
        console.log(err);
      })
      .catch(err => {
        console.log(err);
      })
  }

  closeModal() {
    $('#modal').modal('close');
  }

}
