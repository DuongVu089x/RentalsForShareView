import { SystemConstants } from './../../../core/commons/system.constants';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../../../../assets/css/admin.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  public user: any;
  public imageSrc: string = SystemConstants.BASE_API;

  @ViewChild('sidenav')
  sidenav: MdSidenav;

  constructor() {
    document.body.className = '';
    document.body.classList.add('nav-md');
  }

  ngOnInit() {
    $.getScript('../../../../assets/js/custom.js');
  }

  changeNav(event) {
    this.sidenav.open();
  }
}
