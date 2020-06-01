import { Component, OnInit } from '@angular/core';
import { Users } from '../../../shared/model/user'
import { AuthService } from 'src/app/shared/service/auth.service';
import { DataService } from '../../../shared/service/data.service';

import {Title} from "@angular/platform-browser";

import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  users: Users[] = [];

  currentUser:Users[]=[];

  loading;

  constructor(private authService: AuthService, private dataService: DataService, private router:Router,
    private route: ActivatedRoute,
    private titleService:Title
    ) { 
      
      this.titleService.setTitle("User List");
      this.getUsers();
    
    }

  ngOnInit() {
    this.loading = true;
    this.getLoggedInUser(); 
  }


  onUserRowSelect(user: Users) {
    let userObj=JSON.parse(JSON.stringify(user));
    let userId=userObj.id
    this.router.navigate(['users/userdetails'], { queryParams: { id: userId } });
  }

  getLoggedInUser(){

    let userID=1;
    let current;

   
      this.loading = true;
      this.dataService.getUser(userID).subscribe(
        res => {
        
         this.currentUser= res["data"]; 
          this.loading = false
          localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
  
        },
        err => {
          console.log('HTTP Error', err.error);
          this.loading = false;
        },
        () => {});

  
  }


  getUsers() {
    this.dataService.getUsers().subscribe(
      res => {      
        this.users = res["data"];
        this.loading = false;
      },
      err => {
        this.loading = false;        
        console.log('HTTP Error', err.error)},
      () => console.log('HTTP request completed.'));
  }

 

}
