import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorage} from "../../../tokenStorage";

@Component({
  selector: 'app-menu-patient',
  templateUrl: './menu-patient.component.html',
  styleUrls: ['./menu-patient.component.css']
})
export class MenuPatientComponent implements OnInit {

  constructor(private router: Router, private token: TokenStorage) { }

  ngOnInit() {
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['login']);
  }
}
