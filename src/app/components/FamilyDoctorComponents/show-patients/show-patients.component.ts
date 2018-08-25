import { Component, OnInit } from '@angular/core';
import {FamilyDoctorManagementService} from '../../../services/family-doctor-management.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Patient} from '../../../model/patient';
import {Location} from '@angular/common';

@Component({
  selector: 'app-show-patients',
  templateUrl: './show-patients.component.html',
  styleUrls: ['./show-patients.component.css']
})
export class ShowPatientsComponent implements OnInit {

  patients: Patient[];
  doctorID: string;
  constructor(private familyDoctorService: FamilyDoctorManagementService,
              private route: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.doctorID = this.activeRoute.snapshot.paramMap.get('userId');
    this.familyDoctorService.getAllPatients().subscribe(patients => {
      this.patients = patients['content'];
      console.log(patients);
    });
  }

  goBack() {
    this.route.navigate(['/familyDoctor/' + this.doctorID]);
  }

  showPatientProfile(patient: Patient) {
    this.route.navigate(['/familyDoctor/' + this.doctorID + '/patients/', patient.userId]);
  }

  goToAddNewPatient() {
    this.route.navigate(['/familyDoctor/' + this.doctorID + '/addPatient']);
  }
}
