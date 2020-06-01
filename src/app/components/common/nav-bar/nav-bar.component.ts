import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../shared/service/auth.service'
import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  sideMenuList;

  firstName;

  ngOnInit() {

    if (localStorage.getItem('currentUser')) {
      let userDetails = JSON.parse(localStorage.getItem('currentUser'));
      this.firstName = userDetails.first_name;
    }
    else {
      this.getLoggedInUser()
    }



  }

  getLoggedInUser() {

    let userID = 1;

    this.dataService.getUser(userID).subscribe(
      res => {
        localStorage.setItem("currentUser", JSON.stringify(res["data"]))
        this.firstName =  res["data"].first_name;

      },
      err => {
        this.firstName = "Test User";
        console.log('HTTP Error', err.error);

      },
      () => { });

  



  }


  /* Edit User navigation */
  onEditUser() {
    this.router.navigate(['users/userdetails'], { queryParams: { id: 1 } });
  }

  /* Logout and clear the user session */
  onLogout() {
    this.authService.logout();
  }


  /* Based on mobile screen size app will resize */
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService, private router: Router, private dataService: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
