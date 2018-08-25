import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FamilyDoctorInfoComponent} from "../family-doctor-info/family-doctor-info.component";
import {TokenStorage} from "../../../tokenStorage";

@Component({
  selector: 'app-menu-doctor',
  templateUrl: './menu-doctor.component.html',
  styleUrls: ['./menu-doctor.component.css']
})
export class MenuDoctorComponent implements OnInit {

  userId: string;
  constructor(private router: Router, private token: TokenStorage) { }

  ngOnInit() {
    this.userId = this.token.getUserID();
  }
  goToHome() {
    // this.router.navigate([]);
  }

  goToMyProfile() {
    this.router.navigate(['familyDoctor/:userId']);
  }
  logout() {
    this.token.signOut();
    this.router.navigate(['login']);
  }
}

