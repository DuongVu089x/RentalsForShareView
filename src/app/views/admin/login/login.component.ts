import { SystemConstants } from 'app/core/commons/system.constants';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../../core/services/authentication/authentication.service';
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

  constructor(private _authenticationService: AuthenticationService, private router: Router) {
    document.body.className = '';
    document.body.classList.add('login');
  }

  ngOnInit() {
  }

  login() {
    this._authenticationService.login(this.model)
      .then((res: any) => {
        this.model = res;
        // localStorage.removeItem(SystemConstants.CURRENT_USER);
        // localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(this.model));
        // this.router.navigate(['/blog/home']);
      }, err => {
        // this.errorMessage = JSON.parse(err._body).message;
        console.log(err);
      });
  }
}
