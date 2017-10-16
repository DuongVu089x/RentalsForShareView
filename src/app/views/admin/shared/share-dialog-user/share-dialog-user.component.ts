import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { FileUploader } from 'ng2-file-upload';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-share-dialog-user',
  templateUrl: './share-dialog-user.component.html',
  styleUrls: ['./share-dialog-user.component.css']
})
export class ShareDialogUserComponent implements OnInit {

  uploader: FileUploader = new FileUploader({ url: URL });
  listFilePreviewPath: SafeUrl[];
  filePreviewPath: SafeUrl;
  hasBaseDropZoneOver = false;

  constructor(
    public dialogRef: MdDialogRef<ShareDialogUserComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer) {
    this.listFilePreviewPath = [];

    this.uploader.onAfterAddingFile = (fileItem) => {
      this.filePreviewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
      this.listFilePreviewPath.push(this.filePreviewPath);
    };
  }


  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  removeFile(index: number): void {
    this.uploader.queue[index].remove();
    this.listFilePreviewPath.splice(index, 1);
  }
}
