import { MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isLogin = true;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
    this.updateStyle();
  }

  updateStyle() {
    $('md-ink-bar.mat-ink-bar').css({
      'height': '4px',
      'background-color': 'bisque'
    });
  }
}
