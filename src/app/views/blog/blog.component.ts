import { DataService } from './../../core/services/data/data.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  result: string;
  isTop = false;
  styleToTop = 'back-to-top';

  constructor() { }

  ngOnInit() {
    $.get('../../../assets/js/custom.js');
    $.get('../../../assets/css/custom.css');
  }


  backToTop() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const height = document.body.scrollTop;
    console.log(height);
    if (height > 400 && !this.isTop) {
      this.styleToTop += ' to-top-fixed';
      this.isTop = true;
    } else if (height === 0) {
      this.styleToTop = 'back-to-top';
      this.isTop = false;
    }
  }
}
