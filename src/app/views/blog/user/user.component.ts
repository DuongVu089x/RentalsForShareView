import { SystemConstants } from './../../../core/commons/system.constants';
import { MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isLogin = false;

  constructor(public dialog: MdDialog) {
    if (localStorage.getItem(SystemConstants.CURRENT_USER) != null) {
      this.isLogin = true;
    }
  }

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
