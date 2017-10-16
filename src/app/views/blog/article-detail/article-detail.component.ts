import { ShareDialogImageComponent } from './../../share/share-dialog-image/share-dialog-image.component';
import { ShareDialogComponent } from './../../share/share-dialog/share-dialog.component';
import { element } from 'protractor';
import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  @ViewChild('imgTitle')
  viewImgTitle: ElementRef;

  @ViewChild('divAuthorBlock')
  viewDivAuthorBlock: ElementRef;

  heightDivAuthorBlock: Number;

  flagToogleComment = false;
  commentBlockCss = 'comment';

  constructor(public dialog: MdDialog) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  toogleComment() {
    if (!this.flagToogleComment) {
      this.commentBlockCss += ' show-comment-block';
    } else {
      this.commentBlockCss = 'comment';
    }
    this.flagToogleComment = !this.flagToogleComment;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogImage() {
    const dialogRef = this.dialog.open(ShareDialogImageComponent, {
      width: '800px',
      height: '700px',
      data: {
        urls: [
          'https://static.chotot.com.vn/wm_images/10/1081461276.jpg',
          'https://static.chotot.com.vn/wm_images/10/1003455275.jpg',
          'https://static.chotot.com.vn/wm_images/10/1011978594.jpg'
        ]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
