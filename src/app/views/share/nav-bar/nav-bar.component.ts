import { SystemConstants } from './../../../core/commons/system.constants';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  flag: boolean;
  styleHeader: string;
  isLogin: boolean;
  constructor(private el: ElementRef) {
    this.flag = false;
    this.styleHeader = 'nav-header';
    this.isLogin = false;
  }

  ngOnInit() {
    if (localStorage.getItem(SystemConstants.CURRENT_USER) != null) {
      this.isLogin = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const height = document.body.scrollTop;
    const heightHeader = this.el.nativeElement.offsetHeight;
    if (height > (heightHeader + 100) && !this.flag) {
      this.flag = true;
      this.styleHeader += ' nav-fixed';
    } else if (height <= heightHeader && this.flag) {
      this.flag = false;
      this.styleHeader = 'nav-header';
    }
  }
}
