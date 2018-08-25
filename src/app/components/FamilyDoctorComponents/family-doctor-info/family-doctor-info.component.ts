import { Component, OnInit } from '@angular/core';
import {FamilyDoctor} from '../../../model/familyDoctor';
import {FamilyDoctorManagementService} from '../../../services/family-doctor-management.service';
import { Router} from '@angular/router';
import {TokenStorage} from '../../../tokenStorage';

@Component({
  selector: 'app-family-doctor-info',
  templateUrl: './family-doctor-info.component.html',
  styleUrls: ['./family-doctor-info.component.css']
})
export class FamilyDoctorInfoComponent implements OnInit {

  familyDoctor: FamilyDoctor;
  constructor(private familyDoctorService: FamilyDoctorManagementService,
              private router: Router, private token: TokenStorage) { }


  ngOnInit() {
    this.getFamilyDoctor();
    console.log(this.familyDoctor);
  }

  getFamilyDoctor() {
    this.familyDoctorService.getFamilyDoctor().subscribe((familyDoctor: FamilyDoctor) => {
      this.familyDoctor = familyDoctor;
    });
  }

  goToEdit() {
    this.router.navigate(['/familyDoctor/' + this.familyDoctor.userId + '/editMyProfile']);
  }

  goToShowPatients() {
    this.router.navigate(['/familyDoctor/' + this.familyDoctor.userId + '/patients']);
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['login']);
  }
}
