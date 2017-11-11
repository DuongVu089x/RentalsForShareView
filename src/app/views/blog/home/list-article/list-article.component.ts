import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  @Input('motels')
  motels: any;

  constructor() { }

  ngOnInit() {
  }

}
