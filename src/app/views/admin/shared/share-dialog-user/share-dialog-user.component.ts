import { UrlConstants } from './../../../../core/commons/url.constants';
import { SystemConstants } from './../../../../core/commons/system.constants';
import { Motel } from './../../../../core/models/motel.models';
import { MotelService } from './../../../../core/services/motel/motel.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

const URL = `${SystemConstants.BASE_API}${UrlConstants.UPLOADAPI}`

@Component({
  selector: 'app-share-dialog-user',
  templateUrl: './share-dialog-user.component.html',
  styleUrls: ['./share-dialog-user.component.css']
})
export class ShareDialogUserComponent implements OnInit {

  uploader: FileUploader = new FileUploader({ url: URL, authToken: `${JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)).access_token}` });
  listFilePreviewPath: SafeUrl[];
  filePreviewPath: SafeUrl;
  hasBaseDropZoneOver = false;
  motel: Motel;

  constructor(
    private motelService: MotelService,
    public dialogRef: MdDialogRef<ShareDialogUserComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer) {
    this.listFilePreviewPath = [];

    this.uploader.onAfterAddingFile = (fileItem) => {
      this.filePreviewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
      this.listFilePreviewPath.push(this.filePreviewPath);
    };

    this.uploader.onCompleteItem = (item: FileItem, response: string, status: number) => {
      console.log(response);
    }
    this.uploader.onErrorItem = (item: FileItem, response: string, status: number) => {
      console.log(response);
    }
  }


  ngOnInit() {
    console.log(this.data.id);
    this.motelService.getById(this.data.id)
      .then((res: any) => {
        this.motel = res;
      }, (err) => {
        console.log(err);
      }).catch(err => {
        console.log(err);
      });
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  updateMotel(): void {
    console.log(this.uploader.queue.length);
    this.uploader.queue.forEach((value, index) => {
      console.log(value);
    })
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  removeFile(index: number): void {
    this.uploader.queue[index].remove();
    this.listFilePreviewPath.splice(index, 1);
  }
}
