import { Component, OnInit } from '@angular/core';
import {Patient} from "../../../model/patient";
import {PatientManagementService} from "../../../services/patient-management.service";

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  patient: Patient;

  constructor(private patientService: PatientManagementService) { }

  ngOnInit() {
    this.patientService.getPatient().subscribe((patient: Patient) => this.patient = patient);
  }

}
