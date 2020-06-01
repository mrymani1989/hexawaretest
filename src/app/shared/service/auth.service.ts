import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Users } from '../model/user';

import { AuthTokenService } from './auth-token.service'


@Injectable({
  providedIn: "root"
})

export class AuthService {

  BASE_URL = "https://reqres.in/api";

  constructor(
    private http: HttpClient,
    private authToken: AuthTokenService,
    private router: Router
  ) { }

  public login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.BASE_URL}/login`, credentials).pipe(
      tap(
        data => {
          let response = JSON.parse(JSON.stringify(data));
          let token = response.token;
          this.updateToken(token);
        },
        error => { }
      ));
  }

  updateToken(token: string) {
    this.authToken.setuserToken(token);
  }

  public logout() {
    this.authToken.clearStorage();
    this.router.navigate(['/login']);
  }
}
