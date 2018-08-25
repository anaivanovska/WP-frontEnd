import { Component, OnInit } from '@angular/core';
import {Vaccine} from "../../../model/vaccine";
import {PatientManagementService} from "../../../services/patient-management.service";
import { ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {TokenStorage} from "../../../tokenStorage";

@Component({
  selector: 'app-show-vaccines',
  templateUrl: './show-vaccines.component.html',
  styleUrls: ['./show-vaccines.component.css']
})
export class ShowVaccinesComponent implements OnInit {
  vaccines: Vaccine[];
  role: string;
  constructor(private location: Location,
              private patientService: PatientManagementService,
              private tokenStorage: TokenStorage,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.role = this.tokenStorage.getRole();
    let userId;
    if (this.role === 'patient') {
      userId = this.activeRoute.snapshot.paramMap.get('userId');

    } else if (this.role === 'familyDoctor') {
      userId = this.activeRoute.snapshot.paramMap.get('patientId');
    }
    this.patientService.getPatientVaccines(userId).subscribe(vaccines => {
      this.vaccines = vaccines;
      console.log(this.vaccines);
    });
  }

  goBack() {
    this.location.back();
  }


}
