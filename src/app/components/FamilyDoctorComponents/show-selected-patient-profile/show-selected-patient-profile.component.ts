import { Component, OnInit } from '@angular/core';
import {Patient} from "../../../model/patient";
import {FamilyDoctorManagementService} from "../../../services/family-doctor-management.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {PatientManagementService} from "../../../services/patient-management.service";

@Component({
  selector: 'app-show-selected-patient-profile',
  templateUrl: './show-selected-patient-profile.component.html',
  styleUrls: ['./show-selected-patient-profile.component.css']
})
export class ShowSelectedPatientProfileComponent implements OnInit {

  selectedPatient: Patient;
  constructor(private patientService: PatientManagementService,
              private ativatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getSelectedPatientInfo();
  }

  getSelectedPatientInfo() {
    const patientId = this.ativatedRoute.snapshot.paramMap.get('patientId');
    this.patientService.getSelectedPatient(patientId).subscribe((patient: Patient) => this.selectedPatient = patient);
  }

  goBack() {
    this.location.back();
  }
}
