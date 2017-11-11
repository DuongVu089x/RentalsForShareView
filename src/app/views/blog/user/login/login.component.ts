import { SystemConstants } from './../../../../core/commons/system.constants';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../../../core/services/authentication/authentication.service';
import { UserModel } from './../../../../core/models/user.models';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MdTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  icon = 'visibility';
  isActive = true;

  loginForm: FormGroup;
  user: UserModel = new UserModel();
  errorMessage = '';
  password = '';
  constructor(private _authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  changeIcon() {
    if (this.isActive) {
      this.icon = 'visibility';
    } else {
      this.icon = 'visibility_off';
    }
    this.isActive = !this.isActive;
  }

  login() {
    this._authenticationService.login(this.user)
      .then((res: any) => {
        this.user = res._body;
        localStorage.removeItem(SystemConstants.CURRENT_USER);
        localStorage.setItem(SystemConstants.CURRENT_USER, res._body);
        console.log(JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)).access_token);
        // console.log(JSON.parse(JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER))._body).access_token);
        this.router.navigate(['/blog/home']);
      }, err => {
        // this.errorMessage = JSON.parse(err._body).message;
        console.log(err);
      });
  }
}
