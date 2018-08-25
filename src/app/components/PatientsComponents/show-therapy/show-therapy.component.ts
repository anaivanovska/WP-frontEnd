import { Component, OnInit } from '@angular/core';
import {Medicine} from "../../../model/medicine";
import {ActivatedRoute} from "@angular/router";
import {PatientManagementService} from "../../../services/patient-management.service";
import {TokenStorage} from "../../../tokenStorage";
import {Location} from "@angular/common";

@Component({
  selector: 'app-show-therapy',
  templateUrl: './show-therapy.component.html',
  styleUrls: ['./show-therapy.component.css']
})
export class ShowTherapyComponent implements OnInit {

  medicines: Medicine[] = [];
  role: string;
  constructor(private activeRoute: ActivatedRoute,
              private location: Location,
              private patientService: PatientManagementService,
              private tokenStorage: TokenStorage) { }

  ngOnInit() {
    this.role = this.tokenStorage.getRole();
    let userId;
      if (this.role === 'patient') {
        userId = this.activeRoute.snapshot.paramMap.get('userId');
      } else {
        userId = this.activeRoute.snapshot.paramMap.get('patientId');
      }

      const dateOfExamination = this.activeRoute.snapshot.paramMap.get('dateOfExamination');
      this.patientService.getMedicinesForExamination(userId, dateOfExamination).subscribe((medicines: Medicine[]) => {
        this.medicines = medicines;
        console.log(medicines);
      });
  }

  goBack(){
    this.location.back();
  }
}
