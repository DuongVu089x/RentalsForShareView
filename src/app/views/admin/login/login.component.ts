import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../../assets/css/admin.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loading = false;
  jwt = '';
  model: any = {};
  returnUrl: string;

  constructor() {
    document.body.className = '';
    document.body.classList.add('login');
  }

  ngOnInit() {
  }

}
