import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Utils } from './../../../shared/utils/utils';
import { AuthService } from './../../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;

  errorStatus = false;
  errorMessage = "";
  successStatus = false;
  successMessage = "User validated successfully. You're redirecting to dashboard..!"


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private titleService: Title
  ) {

    this.titleService.setTitle("Login");
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get f() { return this.loginForm.controls; }


  onLogin() {

    this.submitted = true;
    if (this.loginForm.invalid) { return; }


    this.loading = true;
    this.authService.login(this.loginForm.getRawValue()).subscribe(
      res => {
        this.errorStatus = false;
        this.errorMessage = "";
        Utils.alertMessage(this.successMessage, "success");

        setTimeout(() => {
          this.router.navigate(["/"]);
        }, 1500)
      },
      err => {
        this.loading = false;
        this.errorStatus = true;
        this.errorMessage = JSON.parse(JSON.stringify(err.error.error));
      });

  }
}
