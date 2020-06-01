import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  public userToken: string;

  constructor() { }

  setuserToken(token) {
    this.userToken = token;
    localStorage.setItem('token', token);
  }

  getuserToken() {
    let token = localStorage.getItem('token');
    return token
  }

  clearStorage() {
    this.userToken = "";
    localStorage.removeItem("currentUser");
    localStorage.removeItem('token');
  }

}
