import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [
    './admin.component.css'
  ]
})
export class AdminComponent implements OnInit {
  s: any;
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
  }

}
