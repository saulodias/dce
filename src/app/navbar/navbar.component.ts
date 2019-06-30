import { Component, OnInit } from '@angular/core';
import { navbarRoutes } from '../app-routing.module';

@Component({
  selector: 'dce-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routes = [];

  constructor() {
    this.routes = navbarRoutes;
  }

  ngOnInit() {
  }

}
