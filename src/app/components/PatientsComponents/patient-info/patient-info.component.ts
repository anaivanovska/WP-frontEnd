import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../../model/patient";
import {PatientManagementService} from "../../../services/patient-management.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  patient: Patient;
  constructor(private patientService: PatientManagementService,
              private  route: Router) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
      this.patientService.getPatient().subscribe((patient: Patient) => this.patient = patient);
  }


  editPatientProfile() {
    this.route.navigate(['patient/' + this.patient.userId + '/editMyProfile']);
  }


}
