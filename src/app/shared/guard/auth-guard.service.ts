import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { AuthTokenService } from './../service/auth-token.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private router: Router, private authtoken: AuthTokenService) { }

  checkLogin(): boolean {
    if (this.authtoken.getuserToken()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
  canActivate(): boolean {
    if (this.checkLogin()) {
      return true
    }
    else return false;

  }

  canActivateChild(): boolean {
    return this.canActivate();
  }



}
