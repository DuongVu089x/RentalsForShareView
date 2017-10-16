import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public functions: any[];

  @Output('sidenavOpen')
  sidenavOpen = new EventEmitter<Element>();

  constructor() { }

  ngOnInit() {
  }

  emitChangeNav(event) {
    this.sidenavOpen.emit(event.target.checked);
  }
}
