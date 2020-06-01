import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items;

  constructor(   private titleService:Title) {

    this.titleService.setTitle("Dashboard");


   }

  ngOnInit() {

    this.items = [
      { title: 'Total User', value: 1000 },
      { title: 'Active User', value: 800 },
      { title: 'Inactive User', value: 150 },
      { title: 'Blocked User', value: 50 }
    ];

  }

}
