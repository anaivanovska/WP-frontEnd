import { Component, OnInit } from '@angular/core';
import {TokenStorage} from "../../../tokenStorage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(private router: Router, private token: TokenStorage) { }

  ngOnInit() {
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['login']);
  }
}
