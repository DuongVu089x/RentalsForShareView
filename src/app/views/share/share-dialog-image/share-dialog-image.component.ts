import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-share-dialog-image',
  templateUrl: './share-dialog-image.component.html',
  styleUrls: ['./share-dialog-image.component.css']
})
export class ShareDialogImageComponent implements OnInit {

  position = 0;

  constructor(
    public dialogRef: MdDialogRef<ShareDialogImageComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onPervClick() {
    console.log(this.data.urls.length - 1);
    if (this.position > 0) {
      this.position = this.position - 1;
    } else {
      this.position = this.data.urls.length - 1;
    }
  }

  onNextClict() {
    if (this.position < this.data.urls.length - 1) {
      this.position = this.position + 1;
    } else {
      this.position = 0;
    }

  }
}
