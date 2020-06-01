import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {

  constructor() { }

  sideMenuList;

  ngOnInit() {
    this.sideMenuList = [
      { link: "", iconName: "fa fa-home", name: "Dashboard" },
      { link: "users", iconName: "fa fa-user", name: "User" },
      { link: "settings", iconName: "fa fa-cog", name: "Settings" }
    ];
  }
}
